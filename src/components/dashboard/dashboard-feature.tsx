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
    "29Mjn6ko52qfSj3H3igpUugKsGghzNkpNT4eYRZALSRGp1qjvHEQtXH9WoMasYkKDVJu9KHVYDHjKGKMMBWZc4jq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2UByAz7Ra9yPbyRNppWBsRrPGjXG9j7LE9DEgcmwyvULZz9icCGZA1e4SyrkXwVARfVwVDaS7BUP4qQ2qmVC2Z",
  "key1": "2Ppumgu3RjMXkHsUVyQKmwToAz4orPKZMUUYMUT56tL46svhK464z2SAQjd15tkWW6QbsqhssWUqtnNtXTYpRQqh",
  "key2": "4u6KkXdviJVjgGzD99F27fFDWU3vEesJ7uD89USNBV6dShRYa2jcAQqxTKu3WxaKnSXisLMSp3ZYBhNPBUaMLnLu",
  "key3": "JGxWKTn2uE265HVhxUKZgRUyw3bKGeKnsHVKjbRgaamJxFBK9bPJzkuLHZAywBZapCjAmewkdBEUPHvw36pvmw3",
  "key4": "2kDAXgs5kypKaJ81aPoSYnXSK74i4pJ3ZQa4Jdk6RdUHXqppNpx2xRSv6Ng4Q6SLBUbsdoPZRxPFLfH2iYSVpZ78",
  "key5": "h7EBzRRWqMXgGowW898uJY3g46YuSfvCvYg25SfjVsDbFTTnqrA4HEXNEmkn83c756embkofe3s6MUkrTrkb3fL",
  "key6": "4nsVGZxAgVQJ22P79j97mBLrmvW8Ak6BozvsTnFVeLyjQpFbN8KYmi1mTXRhHkaxvyBPKa2DFgDESV3FzCJwpCb1",
  "key7": "5X9D4jfQvW7W4dwZkMzknhNwEXJvJgTQzCn4ALUDraWC3W52EG8UA5HpXniPy53YMsCms94xESnvfwUGiKrmUjDL",
  "key8": "4DXwgsiJRQcshmNvn1xxB1qQM5SgK2JZgKNGMSMkKtpXCSBs46VHpX1xXYk3Zj4nEse3rNzQQFqcxaPDeQbLHDpA",
  "key9": "2fn8bkCZfoeik1SbeBU78J7igSzjkGXqWmjtGw2WpkrmFExPGRrSErYZ16ZqZ9ig8HoMCn2hRr72z936J95kTwx9",
  "key10": "2tGKSbkg6U1rXJYon5z1SDuN2Y9qsUNK5TYZcABD3UW7dtoUrpcxMQHP1jn7uP2RYQb8NaQygkcLz8f6NPrRXU9z",
  "key11": "zb52GstBrMwP5Nxty2p4DC75RZ8WxnVCBQTp9caJhf855q9JXh6ZGdiyokHEpxC4i2jKSYNKVUWxaptWKUcyXsF",
  "key12": "h8Tk5pXbTuSdYgrQd9dfxVJAizSfYr7sKzyTQCZS48TydBspsc9gZow58xA9x1jVtGyQW3GD3AyvtTbBNmugVTM",
  "key13": "3mVnntT4Kad886662HQxwKspPfQxwkBzQKUxSAaBvGjYsvc9vsT8WZ4TsB9pUAXAPBGE912W6A2b9QrgnDx7nckm",
  "key14": "2TcNubGYJ54wuivDRprnsexkPnzPagA7HDVahsFN8SByW5wmh9ZUifqqwiG5jKaTD59U9Wvo29coAVVZ8cwtxHPi",
  "key15": "4PPLWKqN9ofzXVUKum1Tr31H6UpyRpG7X21DBNLjZmVRuw4g22aBLRLdAzw7hdNdwAtrY8FS6zenwPWNT8FkBCzr",
  "key16": "3ZvQDQMTjquyS2QQr1BJApPF6rKC2gwCq4VyehW8NuDDHw4VZnYE9JKnWJkXHPVxY1vATxutiYZuTcbF2cJJXuai",
  "key17": "NyVm3Ee27fL3CMywkepFLcgNwgCwEwoWPPnywf298Sp5XC4pWUsntsbkigi6CgBvkKiS8Cx5SKHLHDzfTKD4BDy",
  "key18": "4Jng7M7WVyjzxwUcfNviQQxeUshBTc9i1MSZtSzYyyrAAJY1qr6Xg3fF2raP2jCGUU1ALpb2PRUkUzXDz8b9pUSx",
  "key19": "5G52tMuWMutx4oB7ReJFcEjvDy6m3Fchr2KaxWmsW5uSaMxGsqQk1eRbeozgcNu2pi4jKWRhbsUgUBMnCgspRrpf",
  "key20": "53Lq5QYZsgZQcaXncosPPMeE89RNuXm8Yo1cgmWRtxZTwNyvRyDLEcGNSiVrht4uowubsa5SiAqL6y632fqcnLfw",
  "key21": "37TZEEzQZ7pDGP5xRMkdYsD4RGsVJF2P24cYH1vyyD3w1wQSQk74mFyVJ5DNRjU31DhNVnDXGDxFybYLbs3ZcZ4m",
  "key22": "CWJHuUvyXqkYVHCgynS2FgbYjph9x2XJzWYnxzCLPDEwUDXcEvtdrErYhF9XLgpbZYeGs8DcnGW1GfEhfpz7Npn",
  "key23": "5W1WRrJ46sCPHiofsuRncarasU81mdAyQUHVUAqwAzLr5JB5Kv7CcvmCAgBLYCnnUNvX4hMYgDqoBzG8JhGSBqbJ",
  "key24": "7aCqSyFvQR6aNUFQB6MojjtoDydKU8EsVjQazhMaREkC7b6DsgTMoC7gyCy5UXssaPrbxFHR2WrXC8TokVh3H5s",
  "key25": "uCe1eRpq6B8NqfdmbEjVrhCHykMWc6HhsZTCEKBShcMJLuacdd6rhGYhSE7GtBXX4fLEmp4faufap93SyNP1JwT",
  "key26": "5Ht8Y6SLMjZK9SaPftnAmw8uoxHXjmgZJXD7GsmtJRUtivUDThN3ti45b6srV57bvzRSCZ2qfYVixtrHMSPMQKaV",
  "key27": "5DhPmLXtJPN3WbYyMrfwXXysy3FyknBTJ24vbRM8kxYof7HbZcPWx4sq6jbX1ZZ7R5TmREc4NDh7DNMkjNN5t5eP",
  "key28": "2M2tpEndd6s9R5Smdcok4LGMTrPBDTdPDEMVpaPDaxbiCaDzAYncX7EFE8N4MUDRX7mMfK25qvaatrAzeQu4UDw3",
  "key29": "4DytSta7cP7BJRhAAVQW6KpM6FV2LzvKZkYVRAg7ko659f9Ry7cV7Sh5HbvbiJii1rqwcbghkgVu6jS2pgfUrGUx",
  "key30": "4BdpwvQgcFf6dso5vHDQjZwPPNEyA6JpM2TiUD42UVPGoRoxsyFQH2c2EEiie1VZUacjyd79MKEMk4BWqME67KDR",
  "key31": "5rMkFyw6uGyRiAs14NqJ1iJJghE6KUigoGMtwg7KNFmxdzniJqAANuZkpodWhwWRnjbSxT2e7oZePkSbJaQoXd4h",
  "key32": "41naxDZU1uSwtiML2fivRQzxPBpzGHm3dKdaovLtSX7BneDT6MwvCioxxRpKX98ghkMmP3KZ1myYa9n6QvVciNta",
  "key33": "hY1ZzLnaVtu6rc1wFBFJNHWoCmxgM74e5r8Xc2jfBzLVLiVGg1QxMpBTWjx1rfHHjUU3Kh9aNDb6k8y44eiKru4",
  "key34": "4h5irdNmcfWSG3umQZ6J3FkFMub5hoMpPkuBVNUnCY9iV2oM1sg9BbRohsZ1sgBJHnpicKR9xcAXis4yEcwAvRAe",
  "key35": "5o8keABDdtbEoJZyB67ok6etBFpdWGVpkXyoXSMVxNzFJhRuBHmZQAC6FPotLs63azUJAsJjSMidpsrnpUNAFhPE",
  "key36": "3DwAvuQ1AZmoKay78MszpeiYPYHGoNGwgGffKfj7HN5zvCDGCvY15ds8DiwVh6rJAWXZGefGgNV2xFCoBmA5PFUR",
  "key37": "3FiCroBWdz8uJvJYFWL73UvY2fegSKGENEt4YkFnnaACBooUPTjQs14Cm6gX9vkuNwqmuyTshtM4TTv2FFP3QW3F",
  "key38": "oSe1eHayjo8e3WdWn6EQRFPL4KwT7i8GDYg6fvzKafMaEszuku7LDCaECB9JTaKrLudGczwVAfrMgyDotQVmfUh",
  "key39": "3PaLzwB9i5EL3JZgg7AUjj2wUGv8Tbt8oUnTuHW1T7dGcjZtDftoX35EHZQa8WkEKyCHg5T6TtfNmAB9QNVoVzwn",
  "key40": "3RUmRx12iwSGGQgdLYaS4DfZSR1eoWP45CFdQN348jkgFjWTEMyK7yZpST3AoRiQfdA9JNoEXS5nLFXNqMr7z2oj",
  "key41": "3jwsgQJYZPvMLQDNrfr6Ajfe7ut1pFmTwQ4rJcKZBWz1H13SirQz7sck4YZDrvbrturqCjWs3DGNpWiHhsGimVYH",
  "key42": "2WLRrZ3KC9P4tLayUoBBraNe5xP99zuHQFRKFJTJ1UoxZztyn1yUgjBJ21xtdxwyv5HvTkvwikocBbSPqwnVcXCK",
  "key43": "N4FtRBgtp7gjwEfLaPpkVs5tP6vU1ERYKmgs61Prje6AY84VdGSzhnYe3npRWPnDV2qSrEpRrjqrX1TDLHdChgj"
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
