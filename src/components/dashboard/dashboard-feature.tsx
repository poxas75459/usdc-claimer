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
    "44Nwhwbycv9oEJ5ujPy9XrYJhfFE4JvijnMCqzw2gwXrNSdiGZ8X8QTKTiezMTgc4CQ6asqd19PvwNZQyh1h8ZbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xotfusv7KV6qhN8LrVgDSwDixWeQFVtXMgXpNuqZWhx3BzsX5s6mj7B28H5wsFA6gQhatm46hzST6JtTFyraQWb",
  "key1": "2vL2qsCFdkAvLZtcPz2qkKwgBaLkCLL8BtU2f2FprBt4fVMx9E5uNMHVGYzbKU9rvpCcocey9DoJ3W4ZUxJwyxRT",
  "key2": "38DD7nFMM7CkQmCPVWyeQiksUz7naiiC6NfKRusks5dceos9rTqvdhLWMqrD8wn1kowG9b5v9CEYvVZEdyyBiKYS",
  "key3": "2iCniUqrwwLCHa9VvDT3V1CTvNnEP4UZ8FDw5CGb6ZU3X43V4dQ3BSxeHCqcF2swCGDAZARv5AqF6EMo7nZ1uixM",
  "key4": "4qVGij6v25vEaVY1EJdmE7odDniTZQ54Lw31WydepNBekL2mQc9p1a9taNjsgpwy2i26pe3tSx3o1mxkiXnjgZve",
  "key5": "4QM78fwPeLDTDmBokwitTqW5ZhbyTGMyzboDvgXAxnQxAFBFVBv9izmgL6k3rEGjhmjYwBzTyMTe8SyCVQ35aXRp",
  "key6": "4996nYanBbpp7VHBRY9evmoW2TFFuL2nXg8bvmkLY74QftcAuDGCsYmRVKkcvdBJnJHxLVS1LL13of8XFdwHQZt",
  "key7": "34EcoMpevWs1zfQr9PGWNX6RvhUkbTDG2p2TLTpHxbxbKzhEBN37Qu31gnGMYn2PcvGrj8naT1HPRU1BxFFghJmf",
  "key8": "4e5zNfeDhuHTBXd8vcPPTkqQ5oKszjcRx9Q2cGSAzNFS2c8cAC8vxP6mzYNnsYmVCbWZZK9JXH2d4QeZo8NXLpJd",
  "key9": "5rVsFTD9zjBJrMwYnCKqBj1EgR5aPZTeq2vqXKpNrmwRtwUzYQLJW2aQj7dRtdkXr6cfKt2wTWMDVYB8SkvW2hop",
  "key10": "5xAZwDdjkfNwMvqcWugFgyB5DcySkVgvmuRjLmb6bzhEFSB9aeduGxuDfVd7P8TwerhrbDtWbJw8WgTaUoqY4ndc",
  "key11": "MN3N4JK4YkJoRQBw7RQuAjafodKj2B1s1isUbXkFtdiCANCuajEtpTk3nk4pL2u62379Sv1c1s9SsTW8Y7y3ds1",
  "key12": "ZkjEvwi48tYojRipy3YbXS7vSgUkYdeaZTES6bJNRyyHTC8xJRM92eLVcZN7iB5iqTVy229RKDXhwLNjNGeEp33",
  "key13": "2VUNui7WMSASNahd4ei9MBpVQFPETApmLefWGdDQJAu9w25zRP6qQpLPbymodTmkEeNQTMeC9feQvtoLJ1WC51cf",
  "key14": "3pgvTen1WcPBwyDMKUiH2dfeeoCKzVtG21EtkiA5SyJszsgGQQ2CrSV5JF2uEU5M5w6MNFb9CeHfRHQW1y9ZnyXv",
  "key15": "5m65hj3L1WSMfo5kipNZBMWx2xoQpPUiMvtvBPCjiZagzeV8sUVgRWDX5rk7PVaQaXsefsd5Db6URM8acP78W5Fv",
  "key16": "2tFH3cqthsf4GhUyTnbwsn7VUQ5eKMy8YHjZA6g2W1f1Q1SaCBybErSwa1bYSYbx4eT5KYHuKQd1xnmyHerRwEhK",
  "key17": "5D2ozU16ZkmvudQfJDj68CQL5pRh2EAFmvg2v1QT3nWryXkZeDneL9uMq33DcNgChM7dkczSqnt7zh5yZMMcJkrH",
  "key18": "4gpua6ZctXBs5eH6r5KEkC7YG4hTNktHcQWWyMgHR1vqGF2Uh5PggevfmqAjm8tfeYzSFLVhcdm6e86WCfQuXn9n",
  "key19": "3aJe5fdzxqd7dJYtCGqNY4NuAP57qS6bBsPU6xHSdZWWmJ7JNAP817QAm9J25VQht9A1oiEyM31BPfF66Tg3NBrb",
  "key20": "3iY5fTLxdBxYpswx6yUVcJRUrZwYAtSeYwAtqULrtFbW84qEpbgnLw154zK7hvWNNs3haMoztW75BR27k1jEhqHE",
  "key21": "3KfAKxPSrNSYyjN9N8pSBnY7vSBoWDpNh525begtM7z6TE72GfEvvufryyu9NXUcJmrnJJnnuyGWah99YALpXQ9U",
  "key22": "MTT17Nu3dbuqzs5LypG1VgwqjTNhgRE6P4cN8zJ5xRvvsB2oFTHetysBTgxDAuNcgaJ1CzEswMqmPgac39yMLBN",
  "key23": "2Kzj1gJJmuDpcofBNo6hZRfeDVb2UBfbJfq8ZXiSCFh4JEG2n6EXuYJ3KLZCUVSxoVs6QLAuSDQTwgtekS2RqPBh",
  "key24": "3LwT5XUP8NymvvUfFNGFtDQsjsAMbbVcfhqFWPz6dwW1oS1Xi26u8XkdnYfivSJoU1Yet4AQz3SugxLmQ7uDHwJo",
  "key25": "2byTpw8XsywyvkrMjTXq5vM2yTJqKbYkJYFbbieKgeKtJfi4cZjQguQYhHvb476FeRTnWW4VchEgbXSPVBURvCke",
  "key26": "5hUbcGAUwGPDKcNXxA2PiMZuyuPY4Kt3HtMWFEgfuE2EDchTTvFUHbq2H3CeTkoCH73YHqRqNusuTRV7hsuD5wWs",
  "key27": "23UoSLERFzCSwABTZ9ZKpWFmpGHQc2PRLL5LDuCwawSNGMGYb7mCstEgU2zth18ytjYj53raP6gm8qYSMEVgCgYu",
  "key28": "62zq2yaFzU35HHQm4vzt97rnGgKQswAmYTzVdWJ9nqAKVfSYnQmKRp3LoGomS4prVCYPRFu91Pe2rw9vPgf23z2k",
  "key29": "5a8woJYQYtEE2UK7aVyR3NXXNonihAx478Cx8WNvxkcXQKzrw5ik72tAo5GuLQf4Jcvre85gphi4MDuTtuqLk6NQ",
  "key30": "2k4dszhhqZcPfiM4SbZTQpTQ2VD95T2FyJzPUD5pwYxV7xMjZ8if6tfN2kDnvbrATrhUzHAcGWZa9zUNa1C37jJk",
  "key31": "5Aux6V5qFrV9tYA6DwvVgpepkiRTquQW7VszRD7U3b3C5rUtkHMxVbUn7h32CJ67qL375EAjfPe5Z7XkeCjYxvoV",
  "key32": "5F9Pg8KtNJtFU2cmLeULiNNPMZu8px29nekAQZQJteZEbq4q8F31oL7bjF61Nn1TGhtfZNieHKfkPEp1K1LagX3L",
  "key33": "4zdAf7vxnLTbpN6kRAr7wjbRYk4aeHUBBWag4eZqtfz339Cq3spoqHnHz1qmWPqX7qkG1h4wTJC14NvvsVSDMeuN",
  "key34": "32TP2X7iGGBzfAZS4P58GZVyjgYxZUtWJD4QaDMwy9Gy7AUgnC3Q5Y2v8tTtK3mX3iXpZSNq3NGPyCjwDnqvbKdr",
  "key35": "4wf7eWBfJ38xjmjbsEDgWSu6XGgZ5ATnZA8Cy3mbU6PnDMSpfQHnttpsA9yTWfy3oRwAxXAv2PmhsurTH1BRpSZU",
  "key36": "5PVro5QKpF4DjJWiAtKGRqJPZoMEF5f5izxErsemgfUzfmLou4Fq715LpbDfCE8pVG9iKiu25FfZ5ru4t5AtPiQz",
  "key37": "5MFVwP9sp2bVe5784o3jSAZ8HfuMqqG1HUzYy837ocVhwzXYcGDRhddWwQkcqUGyUEPUExZ45LhRWxxxKM9CDoCo",
  "key38": "39h62EJ8ZqW99dmbDhan4V5HCzEpRaBLTYgaLnUsAjYo94jsq4GFmjmTnygnrrXo236WaHBwkZU2urVHDm7hZSnT",
  "key39": "VAzLsiWguNQhRyMFeXxMQFJ6dvSxt4yQDHRmpCfuz86ZCnp3jKnysWEJfevEMjWJjXLvH1fcdxrdF7fbB5BTteE",
  "key40": "kVE9u8vweCxCMuQmpdv3v8zRfQYxAG6SLeJf4yAHDMw5sZU6YcgzR8MGQRMJG8bEQL8QJCEV1Sy8SPL3SFYjuDJ",
  "key41": "5DxtP65Kx57aaSQ9Cw91aoJvRY8Jb2KFwJQMe2v8RSUasMdJmQ8VisYhLectsqmXGbkh3QCDXeVwrZbDPXNLVSnD",
  "key42": "4hN78KxqmeXB3ZbLySWCzrTMTYHHhPvXhL83FTAyAHhVfdmCjHSLxFdwAe445YpadSmnuqb6SabGMj7rFZ6aXRjM"
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
