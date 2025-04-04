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
    "5eHMZYT5gKjZtAdiDDeh8aT6HqTjRNZgdjxXpN5UATKX1MuqzbbpBbhVcf6ouo7Ynnj8TToZGFQFXQWtwANSgvyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YRhRrAWr3kjkWzCtk8XgrFsmBktWA2UJ9PUTRQ2EugHV73qzzwcufbDnNEKEsANo8bi9pbkESnoBztKRf9UCi3V",
  "key1": "61tVLWnM7RSioER6BqFGJzFFY1c3A8aoqTBjr9mom5CUgNidkU2oEf4jFgM6cSH4Z63o7ZHw6pba8gd7JGJXTTze",
  "key2": "2fE6uzumWXoMFRvYcQM27WCriw6RinxHJt2tGkwh8m9Cj7mTaAufBVfXoJRE1mQwfaUxiQJ97d3Phq4TdfJQnHgA",
  "key3": "DpF7bDw6TEQdLx8qVABoqjH2pKT21gHv3YYN6e79dfytGKitdYM7vjN9bhbm8nGF6iGxizHoe1n5xkANtQDvPA2",
  "key4": "3R1wUeeepziGSxCB5qKofjQjvchRDrcj9rnfnQSgxs4SUDLgACb2Ps7rHrQGTogoRzeZDR4yxoAvjRv95nXp9XT8",
  "key5": "4pU4B7Ezc1GfsUYiFjGhqTpnXw7PwPp7NPaK3HLGGFjrhrmRkPtPsA7DSEcUxRTcQvQDZRD2yJherYCCaKm9VC8B",
  "key6": "4zQbtVdgHi2st9eJJM95GioxiPvf258Ztyfts8X3Po7T1d5z8V9NQ7CTQ9aKsKiVXuVNCmqGkXzNhzoSe8EjG4eh",
  "key7": "27Ay4gj3iea6ozv3Udv7yYTy35DeZRgA1Edy7XPhnmfGUcDtQH1T9a9KGPsu875whxKTayENnrFVvux1rzQ4Wgqv",
  "key8": "NGvDKUMA5Bv8x6tq6fJ8z3CUnFSCjUyeNsZP1f7HEByYGZTPeGfF6wUYyXnpxREWbtNhD2m55DijwShZLLuD4vM",
  "key9": "4znyKH9NR8ruxD4KeQwXv8GAAGokwoEGP8R9XVLyaxFQvksDWsoAwXgJSGcTba2DKV4Gyetwt7fC2JzNT4ASozqd",
  "key10": "3LRAY9C3QUeowbvf5mDwc4D7UzQQAAGxw8bVJ7phBAkCe9sFerBe6otH6qFD443LV45gca3HLJvWweKrEBECUczF",
  "key11": "35CrKaov8XCYgKhuDNn7WuEVRdpAGYd94khhioyNaCHyiaAmy2JTPTPQYLVrYEqzGBdY9ND9pB1FTXBg8qy8AoWx",
  "key12": "4tyfuzJV7gbDCan31gyrvpjAk8V5rsr8wncVUqEfxmMa7dYBn5fBrvejwCi8aERWZPnTH4YPhjTKTBskVm6jzg6f",
  "key13": "4Qid37VyK4v1xRYwrTgw4kAkm79Msmvee3miE4tMqURQKRMNc6NrtYrhuPJQKa8P5QBbyxnVFGioLw11AjzegiYi",
  "key14": "5MeBvkeRLrPefTQuBkrc8YSauUFQjPki8h6XrpHiZWbXG6qWN5JCj4pdAG8MbKLmoUjG5eVz5VJTTkQxxx6HpNbr",
  "key15": "2CjQGKpGCznytbPuuB3nExQN2ruTxYobsKUPAd3Dcxqw15aTyBzCnQMZFzsdzTnS3LkLp4a7D6RxxchwFR9uaEtp",
  "key16": "3m2ya8tzZhCWqbn3FSe2ZnzT5VwoYAKdNvfYigKQpsmRb1zuhCmvDHaNbVs8oNTJcFKdZRAi1FBMB9BgMwPYkwdh",
  "key17": "2Ba6qnMeQYCxEfMouwUcqyviZFXpxuufnf1txtgJvgjLJyuuER9fVLbVMLFNWsJXLbqHfe6qXX4bM2UDDVBsVGbJ",
  "key18": "3P9DxYYpFMsxhWSSv6r51ztTKj7fk3kBdQrQQpf1kkBd8PVP4dNeRWjMHMzTkR1v2KuUvkrmTdU1G45NyKeaed6J",
  "key19": "2GnvauBPDxNHiND5AKax8mkiGNN5TVv2G5jDSiCbJ9VjEhE5bE8mSjpruoxumUpBrz8b1mTLw9hm1NT8gqeqz2Sy",
  "key20": "439bTgsFK1KnJBAs21UuNjPRpBmXe4QBaE9TjFvVMdxM4av2bJ83LS2iWDhV16TKAptYRT9Z1C7AuLTxrbriFi3P",
  "key21": "41bzUAg4dBjDa9B2d3rBvJ1cD1nj6hAU7Yf688vU19BbDCGPUYTfJnCVPzv6jNSmbREShDxVwgEUvbd71yp8dwLY",
  "key22": "7ANZcnyfrxRzzWHH1foGiN5zyTDFN5EFPEpEXoZ8DjWTqXUYCShS6yYXY5hHfbJxNCMTx21c6FMvTeiqQk8yRND",
  "key23": "48c1pTBTdUuP6h3Y3YSrg6FpsDxiN676FDU6W463cp4vmQ3vSz9uLq6kJdjBiztkqvj73XL2GAhc2wPUdoCeEjZj",
  "key24": "3DigtL4oknNKYYB9yD2GWgmWwhkLdzuEpdx7Rh37vqfAdUjnAeReHTcQvMTZG91QZPdkeWw4LZf5xGvz9cuURVTi",
  "key25": "PZavAZikJtz5xuWbHCjXk9MJeKWUNfbihCqzoKQCDFERprg1dL9iv6bZxmHtqf8nv2ctuPyXSy2HT7xWbCqbrcr",
  "key26": "5ifHjx9H75zVQ4JUcqhPXcWLNXUtb3RCioDc4QN2URiCjmjcJUjftcz7P7hnvNBpWP8FkiMEknKT19MCNwNcaUcn",
  "key27": "3f4A3HczxaV7SUtXtUVRJUHuUVdFG8k7FZgVndUeMquQEuUA2Cjfw51jBeMpL42CZZHwejWLPdAz7vPh6ApKfD85",
  "key28": "5QEM7dsbW2QeybRLCPKh5PipwT8zh8HkJ5YPLNEvXHnUJVeDZosadv35NaPJ5B5WGtUoZejQEPeozeuDA2LipS4F",
  "key29": "3R3gAtyZbbjwLZ2eNfmdkpCALSJM1ZoQpDH7ZEApE66YzupSvWSEnXefafxcqjRdJVei1MnoSdhCuheEvV8jM6Z6",
  "key30": "3i4i6H58R5hNqriXEoJ2j7kaTZpCiDceENQ8PMg2WHMfvcB8sckNxt4KgzMPsD1uzjr1AjSLXPJ4CEwpByH3AdFh",
  "key31": "5yFu7y8WG31odqUF155pV49x2hw9HjgGavUswEaGd8SjugCLmY3NRipXeArdX7oWYDMzgELwwJUAwVTj1gEgpZmG",
  "key32": "4ekN829h1o5Y4VDWMdfPpnTu4ZnwgZPiDTwjou8BVwyGXUcY2xbRRJnbSTtQHHvXWfWj9TEfwsTy9JxVvnjLfNeV",
  "key33": "4KMHwFHUoEDSqtMQxRGbEdVFvtj9CHdWbzkWnjc8T2M8FhPBsz6DX3489grcn98jRJXPUbnJajsK5DtZt8mGFQ3b",
  "key34": "3dvKCmevZ26xtWQh6UehMMQJWR33HxsQkKSonPxzZKMTPJjZaCADnzJq6HuQnaoBD14vyEEVYTXTtwWP4Ldt6qng",
  "key35": "5rZJhSoHtv2vaFEX6yspU5VaNZuSwM9h1rYDjm5kDWm1BAcnorL86GAsESmhQjWiZfC487KNam1kj4SV8wMqB2qj",
  "key36": "5SUub4G44hjNUzVrdUyvJ3z1hRJPS4JES7XXMzNSfKUYdYZdLs8RGG4vZwX45Mhi4wrrnaWydhj8ZVuRz3deiFbu",
  "key37": "2MVTjpDcx6BUrWuoKQmQZP1ZLSRWhNPyiAbgpNR6JmeKPBzUPnjNzeLsd8111biEV7Xo263c1zbFhbEfq5pK83Rv",
  "key38": "22546gozRYzD4ShJmGfXNtVyzHdYoeThddXfBy58HNZXm3NBAsQjUPFCSsBNkAFTpLjwGZUDW53FUKmm8v6vogCY",
  "key39": "53rVaXhfhdLfQEuuunviuhWAHXwygynzMLqCT1p6yfTN7bdZbVpFsQtc7RaHGxfEH64ECGzNAeu1tJBgiLkpfaeN",
  "key40": "3Hk3tZy5hqyqvQEcSfLAkHvJuugGh4HB8uAbzfTzrwurqqD57hTavkF5yqadehu6zKxkBy4RKiwi3jQp7Ncsbnys",
  "key41": "2fbH8k7Jaga6vUsK67WkRLkpUEYzsziAByAQdicgKaMYghWh657wx5hWWhXmWCK6MBvyNGjADwtx8myuFqVxuMP9",
  "key42": "4JhFRD3ir9LCedcairsF89jZBe2kkSFuvVKygR8o1ZWKuKXsupYM6SzbBTbuLPnwdobfTB9JzzQN6h18MtgU2oJu",
  "key43": "4QWJ9xx9mZsrkkw8c5FCerVbHsZ5exraqjXXQAvZmb7phDoDcB7hGiTDK5AnvBU2CSQCtkc58zmwj7xeHYQa7SSz",
  "key44": "9x714Sm8UuSJzj8iB2zQ2CNfdaYbMmpJSj4eDfVweX7ag4ATsnWDJbVMAYdsD253Me63xivD9i4YtUEgUwC6prg",
  "key45": "4V68zAHLqXnYq5Em4M6ocGNc9Rmjg4Yy3CgSy8hr2PUB75U2pVSivp9QLoNktQwkJD1gVrh3R6p1YSUvM8ZQyNHr"
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
