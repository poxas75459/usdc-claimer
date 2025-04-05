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
    "rcdYxP27RvTPWycZtmfdMjz9ZcmkHtM9qXTKDuJqhtwetKNFHXTJnC9UyuMzn5fmPMoE6hQRMqYpPbAGUEgWxiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBhAmNZr33AWHjFaxaFT7HHEipSSAs9aWRvvLgXsJBmZTWn7p1u9v9yn83e1CjcYCEuSvuHVFwVs2L5heneuzh4",
  "key1": "4qa3JhLB4aNtsE85CM7Q7u2Nbz8n3qKXfkqu3nnySBbxYFXBkE8dxRypBSMWtDuvoXxLJBgqNapqaPAC8bNYFvFf",
  "key2": "61JRFwgge4QxSzpsWKEXYtvai3wf5FtLWRSbuvjQZ6rYzQSxd5jRBbVJ6ifcgrB7rXaLbacyoT2PA3UzYu8S5aaZ",
  "key3": "cxGSUUp7SZLJwNiZg8o9xt7duAc95AsdxfL7uRYv4ArqMF5B3JuYuLfvQgZgmDWbywXc5C3sKcfGFA8ZsWUQrkT",
  "key4": "zSu122BdXios3Bi4TYJ8NyTvdGoBncp1ffVStaJoeRhiBezxveHBARnvogsSL8pwMhJKzMAVZNKCxDUwwAfdEtF",
  "key5": "5uAPjSaTgxq9U8tvy8sNjFDTyzjyE1TikAovxTo8UAw2nMkd7qdAUr5uWHAogZvfXf1811JCcatvq5LVp94TYkVZ",
  "key6": "3b4f77pz9ywrPJrZrYJpofCwqpksxEbDPp6XsgAoNpLhoqzTahmEHEreo9XmreNUuvudoZVwb1Gw6oaMh8j9xV7X",
  "key7": "DfDL45Xv8ZjSSjdBfRwYda4p4LF9JT4rXEqDfcgkUmBwStf4MMnxNSF9svWVPQruTEDWMr2dTq6Ljs1mh1mCeWY",
  "key8": "5FuCk6SurvtSLJYHKroBHuoWhCvsxVWD5miHjFwtP2jk3GvzRGaPNpqUgg57seGnSasSDVPRtu1hJPGEvBpBCLx1",
  "key9": "49ahEKXprZtgZBQT25kXcL6UNFe7SYtzHVpLnfMwxsmuVJ4npiPdcKkz7TSyyxB5dFhgMXShZSBmBwAwxYnAweQU",
  "key10": "54tXcm6XoHfL3vgPS6K1i7DXb5umtnaqU3DqrzKbEGTzuGBF7MzNNqvNQd1AYvfNCYCZBuiZooUAvQo4Fey22u8n",
  "key11": "29Rf9rV9GQq1nvoyufs9EnQSeKdc3kpvSHGRmk5bvPywXwoRvcw4ST7suR7TU3g8RGiUJg3Mp6sKXGV5QEcZnBWq",
  "key12": "5J8BZs6DsAFaycYCbLaBN1x1UbRN7aaAuhmaGzftgcQeT42qtCJTyDnhpk2Kj4yU22q3i7Zemkt37WApb3ad6KEA",
  "key13": "4wcYocS5UBgT52mNrFWYQ1VsKnsVK6csQXjdmN4RLY7mzwQf6EwkcSTYXizEwycNBokttStku1NU7rotafKgZRhM",
  "key14": "2w1JUk5VJrLPhESrc6AvGyoVfZKmjZCTZkdv31GAU16VMbJH1QEkH13SMLmhQRDSr9F13pJdeYG8hPGydNPdrDR3",
  "key15": "EeEhSBLcSo9xcMFYuZXsJ9KfonVeEBK6fAMLp6tyCkXNHfoujo45pZwbmN7XWuFGaCtHjwQGEHHQBgLKnnY8VPW",
  "key16": "4Pz3hRq379prYFQiCwmAhvxPnPZdduovCUDwAzjgqu5ZXteqXtnYXq7LND4hmHRq6RWpiPq8VZGFrEoUFjPMRKEN",
  "key17": "3iBe8tKdBJvYwrwBLiHDjirMxbVBVfeLr1ZgY68cGyegb76ABKErLBSQtUvZ58ybwDE7WcsQqez6mNSY73KHDcww",
  "key18": "UvfzkzVj4qZ61CdwfvAns2MauqAZGDy9f6zWVzqTZnBpCMobundXC3wFucjWBzpKoQxZQpHg7detptd3ozYjFgM",
  "key19": "2j6swjyJCwuXUq1JTvHzrjvW1Ge6xtovVAbGEzBEnTQUwPV7ArT1xrtJQSrMY1vejNnawbx1UUwKxjcDkjy2jvth",
  "key20": "28iFDA23SmQJFqsEJdbZY3sgmWFSyNjTbsZDiM4abnGsZ12MnYbnHPZnGPhrpMTQ2ZzR7EyDpNfVuaWoSR7TPZPB",
  "key21": "5Rsoqn9ynrmcKCgBw7NyVXNcsfvnbB75XGdCo6VHZQ76u3SEWrXRtfFndz7jWjkQ7LbuE9Jmg54Z9zGhz8cEUEFz",
  "key22": "4jxJSKYsTuLiyfrAVi8pqZsh1kSMpvzhefZcag6Vp2LKXAEXrGjbm2t848rznHurwMZ7dpkZEyhAKemcewPYfaru",
  "key23": "2uFZegM3zesLK91Rh14HhBEeyACBLEHSYKM9U1aeMwumKjhmanVSRi4tLknpgRCaM99eGgsdF7YoDeEbFz5fi8rm",
  "key24": "3f9ETfS9Tbp6NgtbFPSpyhvRbBy7urVH83XPVbvRkWL4DuMdafbZHWK5xhNURbm1yX61RV498ZDYpNLNQNPQhSWM",
  "key25": "5h7wCUQp3qLaYNuTrqWqyxfTC7Zngmof4DuxDUWGzzUVSJBqmNmH5uZYFsz1EhNzKXT2tKgGUoJfDK3cdRq2g7Hm",
  "key26": "4unUFfwXwuxiCrsDmBWHCKWEopBrMnih77zFEwrtc3y6haNJemUt6WtWv9uwUxVmoPvuuooyZnPWUA5LoDgSjNbo",
  "key27": "5rxY2C392DuyXiXKPpZEgbnJW2azTLmmdzaX11aUJFxCRTPTSymxy7komuKUPhwzAPE9Y3UvPvuEae72C7No4fys",
  "key28": "29GZxQHHE1PD8B5xrRW3ZRrRnToWYUDJc5iaMUP3QaCsBW4zn3udQCHzo2aNfuZAL64wPoRzjLDwWHEUkWiv951V",
  "key29": "5nVm2dS2bWdo1y79evwJEG1fkHypb39rLWNHj8nxmnEkfHfs7oZiGt2bZRjajqsvWQigG8kY4wX5WfE1kqSqby8c",
  "key30": "Lej1kUTMizSdyedqhiqndZ3tiwhZp2YGLwUuFKonbq47zo66iTSryCFYDLVdC9vYYw4dgvYZzNAktgD33KbE1sX",
  "key31": "5DV69o8atkvDLKBde1VvbceuQUqyzUt5Z2JAg9LzUPFqxGWv8QjwCc3w3WRKTmATr5kCyJSZtgskpFbgmqDQ96wW",
  "key32": "4ETozU8jCd5PBvksvpcM54Umyr5aCskYAdJaoArur3Gn31MEgRFJXtbwdLKx2Q8NapocPyX8rSJ5tTSmyLcR6d8z",
  "key33": "455SE3WHJKgBLLRbtupcMW95MbxJYMyLdgHBsGJDUf3NA5L5baJENMWPK5SKjG7errc5fq2cX7yXDmRgULzQ5bys",
  "key34": "x46NApfbeqtee5zLDjp2r2DTqnMYfXtA5acvY4iGwTxwP73pcm1SspR1rmT2XAC7XYYZbJu6hqfhF2R1gKZf6Qi",
  "key35": "4BFxo6ZFVpmYmnrheJRoTLJZPqYTmk2e9RpTFiDxeyw2iEcxegPNVBJh3ppGzR2SAmUn9vmh43WssEau7ZmdahR6"
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
