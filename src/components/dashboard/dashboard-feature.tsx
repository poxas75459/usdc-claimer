/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "35hGdkwHXsDftX7ecm7ZvQ2RoydRF8CHwA76ZLN6uTn4fUMHwgVRswioAfMrzSEZK9oX7494ASUq4uV1kDFSssYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wQCrr7MwEy5oSm7mY6d1YrV9FKot5sGYSy7Zyc76Y48ymcBWux5kJWjfNPctGa334oEN31WRvr8LCJPB5nwqhuN",
  "key1": "4pfB1eXBqzMSMuqQbLtihu45LyCfbgK69H83vnL3ScDQtEXvQGz8oKB9d878zG1xgAg5kLuzuhc9TdQWMsC6Fn5",
  "key2": "648nfgV9VUVaPZqA2cQbwWeaokErzsFYj6ZRqiPTWTiJEzMLQA7NY1sK8m1PDQt2L4WifbW4MVbd8Lr398WqFsGw",
  "key3": "3Aso4qctH8rbbEPvjP7imcJYYntZ2Ecvfwg7CYqSzj7agadhm2NvWxNQYKJaSatcMeVrqVUQ83huitpfJjN9XAez",
  "key4": "4VmYKnaQkDRm3D9GF2Ccxc6UcBMuJq4NNSCz3oAM66Cy9YyW9bLjdKGgKkiMEMBDu6odrPtZSgeZ5xyBW4GT6v9d",
  "key5": "5J3ho2YtVQaC5UgUwY27uNfKmRFrJDVpPzT8L4wzAjHDxyotNh4dNetm6XPZ4JjjEbJpBR4tMXNyyyP7K6pSraT6",
  "key6": "7mpohQnbAKZ6sQJswcteGN1KDzdqw1KZKDKJ4xsyMS2Fe5tFxz6uLTkVt9WH3CQFyBzDeXsUj33gPb7iHebzrSv",
  "key7": "Y4Zh1enVFcgtTFihKBcBMmszjq7krJScvpKLvCreqQW3We3otz8S6BVt64hgW2wSvHF9PLWsB5HaQWD9UGk7HBV",
  "key8": "5LL3ZRLJxBXWQ4HgRiUdE7JU9PCkvQKz1WWhsfSGrUxPJSNGnLw6aQLNEsDmGJS1j5oCkAsvMdVWUMmpqUy6dncQ",
  "key9": "42zSeWrkSpB2PGhEKPZ36DmhyeHAiU9AywNUkQ9iMpvH5r9TZwN7R9iHJB6EjibcRhmMPFunLbLyAkv2oh58Tu6Q",
  "key10": "4fomTYiyY34Z4TZkPsFdvjCzouX4i7zrGid9kTMZfwQaj9b78awvdvw9VvgRNFfc4ypp8zXMQk7745YZcaKcyqnc",
  "key11": "47TRYDrSwWFaz9GSWw1UyKZ3msAxGCn5P2WNGER8JEYxHnBhCFYo69fMnDvrcxQeKDTS75GhD5Dg5iRNLkUc8m17",
  "key12": "2XPFQBwWSkt86PMYiajKPqVtH2wVTh5GKm8UqB5uDWKmD1mL8JKmLdR3dEyeKqjLHUgXV8BRaromLpsyNbfvBycQ",
  "key13": "5VX2uU1n5Hh9BzMLTKSbeURt8iPhF94fALbwLFxuQZdzp7z12H9m89SkEfUzvieibR47t8AF2ZY3xWZHTyaRH8en",
  "key14": "3BtLUW6nwErtjvm9821gqsDj3ENQYn3h4hbEjboh3GoNiqTqz1hdvMYFqAnuC6kqrs1gBn37gYphLkr8Jqq3P8mh",
  "key15": "2mY4z2n4my4sfcqiGzPQUz4bfKYxL5tTVtBCWAywAv1dk3nZoHYt4N6AhXJyGmAxF6R3s5LD4KAmEv8bERysrNuA",
  "key16": "3EGQvZGYtgHukDyoEsFfWT5zj97a539atPBa4oCTDyn5s8w89FK6r43kQqAwZaxBLB7LY6isjdhuj6CMdRRzZqXT",
  "key17": "2qGwyr5Vy5LXTWqdfhQvPfYsnSXrDNhB9Q3kjdpRPPfz7EUYgmPDhWrSP4JNNKsJWMXpufZbCbwt57HMjxj7zjN",
  "key18": "r4LMuo1KiqAzuhK99M7ziR1z5CqGSd3tQ4JWjRHjiyY3WogJeXRuiNj2z5VsYktdeTJfgNEwCjdVM57hM2mvTLu",
  "key19": "5DsRJjgivQWDJdPvJXzycysnvvuYLsnjt82RA2v3nqVFGLVpd2QPqEgutvaM3NqRwMqmpUHxRZX96BzhKWXf7pKX",
  "key20": "2ksNc1ry2hDP6nz1V3whkvqNpp6G9wmbT9ZDzUX53ym7SQuWrcrDQt6fGrvbWVyT7gnvB8F8aMr1kSuVHashCDwn",
  "key21": "4PZySyStCBbVaa76xG9uH3B81Nnfkk2SAGxpM7VzE8STjtA9TLY7brfNwMZDXD3jkLPVm581Rsu3329XF6nFSAb7",
  "key22": "5ApXuU6XkTKWbXMWoGavwmYw2P8sYdTwCAJ8qxHkcDaxicaBeLSaEmDTcLFT76eScmEt8RA258e44Cju3Z2DyzPc",
  "key23": "3DZsrQ64RTPQAHgH9RiVCZtLhRnCoy7gTrZ8XoD5zuSFTnuEndnzDfgtcDwhMyr385J2FG3PSEfujasimsnB6VKt",
  "key24": "3csuDPXnGXWtDJuKfhrue1ypsbotFZJvAq5dQqxauP6D4Hpi5dnLvdC2Bo8w3PAPAuwt6s3f95oTu1fjcV3KL2eN",
  "key25": "2HPifagccahCrNkmZhN2sGPec3Lmgxm1ivjyY95cGUAmaW1p9zdxGmF5F8HQL7FUZtX2SgKL1J97iFwkwzhAkqEM",
  "key26": "5Vva58xv7g3HRCLSMQDve1Cw4GcFdZXDa7KWz524fyWYK9EELxpVWAayotsdDDXL5MFUo1pZxzqW8jvrJ2woYpNm",
  "key27": "3J4dBzwtPVrF57wqDNqEoYRJeQd58BgJ1CZ1MqCpRTmagz4ba6BSmhaVgsyhq1WoddYhCTu18L1aqeJeKsTgJkC9",
  "key28": "5WeB33DtS4bywfQ5pfGj3Bo3yDkNjm5HCGP8DoEYJ1diNzPKDCKccKQk9VCqndbUb3LoL6rFyjfDwMtCUDGxA7tR",
  "key29": "5G9N4fKgeoDCpFfbUb1xKVeAp15cJ6D3gv71rgGz1KKm7vp4YgX8mfrv3ivgWaPtn1uWu8DdxfFWv9hWaNafsYeN",
  "key30": "34NKTmLBPcAnmWj5zrNzBrSuhVfWd2RbCsJNR6nV7nnpSxue9pBBsh1w3cN3gB5nhhSChMiNwWbXGYJyhe2ir28r",
  "key31": "571n6MsHPpKs3Mwsf5je9c1M3prDXZLJR2dSV2RU5nToBujfVtDAch9kD4TvnwuPmUjUZGqXqR8AX8nYjDv4ZHiM",
  "key32": "4VMTWVpMPyhSvAUB1CCXPFTQQNFNgr5C84hWM7ZHH21BSmkHrFAuE1okB4vA7gNu9iMn3zebVY7ebHtGD8bure8L",
  "key33": "3rtojRG68kyBj7nADgwFxwF6F8idmFtNpJodrCRFcfUjTKMzmzkKBEPh8zicnsBBoVeCo8MitUKCaxkWeJoTHz7j",
  "key34": "566Sq2ycKwKDhAxxUjppB5zTgx6hRVZEGCa1KQZf6h83c1KQGadrzi8DMcSJzQTq6psy9MEHpBi2LrBsYcBKEAsN",
  "key35": "38LGtuAALpXUX9TEMCX7Xs81mipCAtpq8d6tcMwcwF7iTzjedcfP7Azw69o1v9VNafH6LitwXuncHx88ZNcpBGwE"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
