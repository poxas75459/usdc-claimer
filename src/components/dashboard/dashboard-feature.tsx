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
    "37DJpBNwbTiWR7P4x6brRqW14si22GK471MHNs8WoJXffCMgrA8xyZ1837NkqQKccrnmTBE2YR5rgZXNT6h2e7oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xonn4kTeaEDQZrCGrx8xeJT86v2kdWDs6y7ij8cvntWaBA99ocCyPNvSaQjLAXtFHZ7pSLv8J8G9u9Sbkhd4Lkz",
  "key1": "33CkePKQfTgbmqTrFdSCHvixWxbKS5cS7i2DWcApY3bS3wQH3ia1S3Qni2ivTUUo7rrozUScFRAuRzvLHTREvKEP",
  "key2": "368MUGPUfnv46acXHZJKx5gSxwPosuwoho45m5i3LkbLv4K93CFNaf6VQEJLEzZKmEyqnLFDnrooS4ZwFz7YezQg",
  "key3": "5TLpmHetDmARmamS1CSMCueg2iRNPhm1Cx6a9gRRtsRpyfJxL3at3J36hUZ9ejdhsiajtfwXygXt8eu2SoZyFpdo",
  "key4": "5UmaviGsVLGJjjWC9vyZcqrc7m9aaxgRyP18URsnmNg8WrhvLfUQT9DezjCse9aJqV3kcHBJ8TQNrzGjAzfuPyRB",
  "key5": "5WirZoXYUYMxg9gidLi89QBk9BKkJbB9xS2nvoS5XmEgFqMypWgndt7WPML275fFjCeUVMt7datqdpqdsQ4nD2dr",
  "key6": "5F9y6VubpQ3c1Zny4bPcK8ajfd8pvkEBjFXJ9wQnhLQVcneJciTgespK4M7xo3GMGd2f1Nw6DhTMCst6uUSJJvom",
  "key7": "fgGcHx1Gz6Vxm5JYcC59Gp1qQdWyRPxkpKndmQ2mzyHGSSoxJEdSHkyj8jc3epoMqRpEhdCk27N133JcifeNUNM",
  "key8": "3mS8wYmZpnazGRSbk1GrbXavsK5NJNqjezk9sXnPdrW48dZgS4YVxGqawo16Xi8zgCM4sQwQz4hB9A7AShvcmdAp",
  "key9": "43DWqmEzmrR1DwhmTbAm1ko2nQhCbbhSEe6nSFNDNpgButTgw3Sx7bAaomfFp2SikQLApPuJdvcMWq3qYpYtXwq2",
  "key10": "4pZJEhitBEmweGZvX9Xvw2oGGhc7YMYCjXff7DdbmfU9UPh7syVY5Wk7D98NrbWPVP2dBPkeZWmUEocBGoqgnFhV",
  "key11": "3koTtjVwwqSBhRZsQ1qPLDQgi63r88jeFpuAv5Ucqq8Ykn6HEtov87MdMUrQ5GtSqoYTpAT5MzGzotqhpM2fSGU5",
  "key12": "ZUULHHhmED3ycfC9QrHgykRBh3AUjoSTLkwVNb22t7HcjUcgPS2JoyHtemAULkBM1Rz3ByFkXWnoZfjYuWeqLev",
  "key13": "2gPAMssCTsf1bAjZmUkQgEQsJfybqBkFa5X4guoQPHBNjVBiMY3oACGttq8nxwpkYgF94fheRfTFpkEQmtGu37BM",
  "key14": "5UW9pU5c7rQcMb1tV3HYzi9NpXHpTwVJsq5GnYN2HnnsM2xaYC1q2x3rAd7dSARyVEPYU8nmFEVTmgFcFNRcuVN1",
  "key15": "vM7ZTs3jtGJZtWCN1yr93vi9ifN36RPHd1XMuXoaJFVqASkvAxPzDrwXtaF1YbbSbZ6qbsEbBGvc7AqcvuZywyu",
  "key16": "2BMuNQrH2gRSXaWhiRtjopWATiVQhpXnGzfZBhwYwfz66KZEEkLKjAKAVzk49c89Kk52Q4A9kVnqxTQ1XaartBUE",
  "key17": "4PitNtpsuxNMNkmVCSGcTZTDb2TrEN8dq16SxBQt1TkMHi6wFF4JZHCEFefnUU3NBAuFfE6urBpYgYQGdB9aaRVR",
  "key18": "5EvabzG1VQEv1yNC4GmP2NzptadPJWrZpgSxs6fmvtAqvnJyuCdJEkFBKhyWuX8P8rnFwNBHnim2ZAA4fED3khxA",
  "key19": "fKCcxHdz3yTmzpZc3kH5HUh5162cDmLHvRRCpund9CVfyKFR3peHkgNekn99x22ze8xufLDZfe31t9gpNwYT2Ug",
  "key20": "4v7LvVo7eqkD5hivAkzQUSCrimCnxxFt1MncCycNoCqBywVo8mmAPt3mvvt2otTsT7CZGWM965zqeUCa3JQySKSM",
  "key21": "z2H8ujoUG1syLBvQN6GinQVs2TiU5x26mW4UZQhmEsXyx5HrZM6S2oAfRXHSoSxnKVgUnt3hM1vCJ3CRk6uBd7m",
  "key22": "2UeF3aqdEr5tzEa8dT8ewmYtZgSGsjW4tXwZM4Xq47g6wigwQqTJ6d42FZUHRJw5igEq2n9hqnrTS36MQgjVDLFN",
  "key23": "2hckvVqxL6jhcTQjH8v5DDhaN8Uq7j68WMb5PWcNV2uuiRRhZoD1vKMVoyjvXuVH2o4YrWRPh295MAQ488nP5Jpt",
  "key24": "3GScjWWxnqCYSVoB8jfkPLcssHDd2jb8ccwfFC8MpMVhBn2oEoWr7QcwoGuxehaNrePVkTaqoigAjMWZSAbLj9Be",
  "key25": "3kLMNyVi7G2basNdQg6nLWQpbvkax5EUSPTTVyeZzs1i72DwL9qsnfx44dahiR22AE46jq8xs7v5RTMBHD8gMH4S",
  "key26": "2vuHs4226CTEotqnhJUVyw7ygonUbnPFJykZAdEbped3sePwfkSKmaS4WArfEpLA7o4xuF7UvLoxgZT6c88tPi1F",
  "key27": "2duPBEhVUTKNn2Jt5GMghjL53f1uJyaoaD2owxXtZZM9yMWhigHXmFdEcACj1dGwwZaJawY4CAe8t54bT2J9i3Bd",
  "key28": "5ehu3g8aTsQxHzdFpLrgmputUf9vXgU3N1Coutj19xdzSHskZzU4NQJW6NTYhhacoYGyKBAEeV7gFXGCpKRxiofL",
  "key29": "2jFtQcNwPX81ZhLbmpj4Z59YZNC8kfEXjSbps4P51wx3CwxtYLfAJ7ih7UwnpuyTSbAuuzeCTgkxzWSMP9Wj3GNm",
  "key30": "5RGSZEH4DJzYo1An1vNjb8yL42Ti77xmABv5kgCcZHsummrvqwPdGwtu1fxmwiCx2aQVsa5zRJUK5KYHnNGp72xQ",
  "key31": "4fNyQUmCk6ZBzubg5FKPbezubRmrkkZDeB32zdhSATyCad6ukP95CzSX3DEWkpWCMubQbPnFLnX4Wy4dxMBEiXuM",
  "key32": "3jsz4dBnpmuCuqtCduyxuCBsthUKizKA8fdALGUCwGdUXB4epifTXjCsFx8z1p6webA1P92uSnPAiqRzQt6Yfqvo",
  "key33": "sELop4LmEEXcg9uTc2hYBKrpVZu7qa4Lc5Tp1ZQFSguSUH9Ds5Tb8YDr1x2CeJyZCQmFG7G1G6mjVMk1uFhAvZy",
  "key34": "n1VHcSswT8TuH98sjzVy7mg9MeRiXuiYGyvrbXC9KFdCG8W2yjYF8orKbiSRWabxS9qcPkUacrmXySre9C4SfrE",
  "key35": "56NugKcWNxNrHHHa1nb1yfJUa5n53P69azA9URhKVnuxiFYASdNZ9FKVFJikfMuRj71WnK5xL6hLZScka85EbXLo",
  "key36": "2sFFr96rqjGepd8WZhh86G4An1Ns8NSTVHp8vxg8Zmjo5Hkx5kBsAqECjstaU6sDgTPm2Fvj8Zj5LYZAkTz5U2dQ",
  "key37": "4qNNyPoXQuxD91VTcsDLnDAuFZ68c2mqUqhcnzNax8PoyGMWnTZV5X8pViDpDZS8qojRM7rSd48aAscL9KbTwg1o",
  "key38": "5RPekQWsGAFdTs1PcmopyUo8X8wKJtzeC5XdcWpnZb1Ksv4k88yJPrsiNCUppNXs8nLo6kAx6cDPKnVEM2JoR27Y"
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
