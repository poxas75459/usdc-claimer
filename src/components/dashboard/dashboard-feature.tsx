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
    "VKJyWNi3vnbo43Tq6K6Ucz3eYki7WJQ1cX7vUYVgaJ5tJ5cQ6v6ySzJ9zV5GQNS5MaFTmSsRtiZU18zRqt78jcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZiphsgCtUuWAXi3tHf4Tazy4VpYk2UAS2oEX4iXsNFFT1WYetQQjaaA6gWqqDy9tFganXowXkVi8hK8YqEtaKe",
  "key1": "5ikSadknkDp5P7pHiGpNhnQ9QPq1mkSBUoGggtr2KxhfdvfCL4KpzCMxcdsj91HGKYUE8quTRz3Rn9BxgNSdmnZ8",
  "key2": "VZamETgoxNpaGXj5MvGSTNMkbo76jbyc6aYsoK5NM2uwMDQrgV2Aq3SSV5ssarNM61NzCeCvMfn3tT9CFK3iMwV",
  "key3": "4ei7UU4sDvZprFbVj6zxS7SMCdaA6J788tKcvXBR9x7JbHPA38MkbfX37XcyRaV9PLo131KorfmDTRrrWXumHWQt",
  "key4": "7GUwvfn6twpr4PLYuhAYGetnQGAS5Fbu4uY2SR3G8AEiszwbzd4atWaUUvt1uRDnmpPpTkNzBpLdeAQ4rr2zLhX",
  "key5": "3uD1p1sTqYyAhkZVjytch4TSqZ8Z9bsux1PXezHB1bq2qXqFBejMs36VpvuY3Qv5AdrkpWvW6cp543WiNMroB8fP",
  "key6": "5ih3CjUj3uHiNvn69nd9RA3VCEvSBuhioqAru3Ftm4uAmRLx7xUiKBEztestBJutxZ3M8XitZMJyCFdUFTG5pYMX",
  "key7": "6kgHHvTuLe3Rjp8bf3jCPXpTPVyRqcc2G3a5Qcgk4HGoZ8djeE1PVypfKCaF6bmWPb9uND5LAJUagJqhALC7wG6",
  "key8": "btepKv3hsudyQpmwyViXG2Wx9nEmyF4LB5korv3wctBb9ctvgFKpLhLxXsphjGSF6bufN6b6wNb4YPJAXR89VHv",
  "key9": "3pV3F7DgNMui6x4AstgiQ3TCFS46xGdCUX9GbC2eqrWaceNSuNwQKK9zg2GbS3WjKXkat72fvSd3JXtDKqc4q1b6",
  "key10": "2511ErvypjHptF4zN5ckGotapUfGSMEeoHgGJudf5g7MBV49zjwqXJupimZeCme4gyKBPDoUAPQgDiFMKsLaYNu7",
  "key11": "5yB68hKVFCCs8D9oCjbDMc7tnGZZEzLCaA1s6TaU3APePW6QbjHQmNPv19iwhwP8xFYckRehqkPH5S8fSUDcFp7",
  "key12": "tHgZ1WwUq3KDeReGQ777f4rd7FcPw5TfY9Brb3ijXyRwhMBj4HVEp4RzwFB9kT24bEZLzf7pDGtVAhEfUmDKTwa",
  "key13": "4YSEyUhjHeYGeDdu6U81J5jvQUaJEADwexfm6YWbXo3A17iKGFy18LUPTaH1rfFHdAQM8npbvUojyCNGvKwZpEQU",
  "key14": "3221417mJASdwTpFFftGwSPW7mDwttV6zoQTu23QgUbcJCRevHbD9SiE5bgAWikZnmW1b79hB4JAJEmS32kzhiqE",
  "key15": "4Pu84KvkbgFdqUtfRzGnMruwd2PhXsVAKZ4Rz6n2Ks2EzBmdkVeCf6cXhPtU995nZuryLUt5CAry2NpqdRvbQSZa",
  "key16": "5JHnB7D3F2hAezjwjGzt1u37pjfXHfpYSupUrxAJk8SFEKHwUkASzgcs9a5J2cgJajP8XT3q8AQPBXGMtSMCgyDf",
  "key17": "3NRZhiTbK5gBMAURi9L2fpqaJsMzLzPjWK6o5j8R9D93wW3CPptUyC5FVQXdE57LDnxS4piJLYKLoWJLvbb91B47",
  "key18": "4tiZSSSceJdSqcQkjhzHAHF1MwpnVSbxpPA2LnVvKSHBntbyttc8TEJtxTWZ8eryUDQyNVp5JgmQxRD1SSAe62yd",
  "key19": "GX31ZzMCpe2Tcp2PKAs1KruCdAK3kbrdJTDd7puxFQC1NimpBb1DeFZB4unFmek8rCNBkEc2xaGhNXffyTeCAF7",
  "key20": "2CvMA2g7xuRqjKvbks6MybwMmgmp25QYWPUgNZq84gZKTt2EDgSpWncU9k72quiHkoZs7AYKgyRkLkGDNL7oUJYJ",
  "key21": "2s6nw2KCTLLDUkpwYpTixz5gg4VGbkKxcZ5v9Na5iAqSUH4vEutDd4m8LWdkUzWCiMAk9pyeMBQWS4WekzpdE3um",
  "key22": "RwSXaBhUdrdGgPwzmxNifCC75W7UHqPtE3vATRmFg1Q1YppLxh9KGYn5ppxd29PUxTAjSh6YPPgu49D4Uiiycx8",
  "key23": "2MP3YGzt6u6uQ8AukRK4erPvPYzYVyvU1BtghwGAbfVpEyapKKD3hL5gnwxD9hbVBNn3NRynatwYZ3Z2WQUtxDuu",
  "key24": "5eG3DTixvNGs7aMcdZZKh2itFpv9tD9tz7QiVqc1pioR4fHiyHUzw2RRdBjaE6XPYPJqe8VHkYgTYKaDGCUv4MR7",
  "key25": "4w1ZqvgApErhhLaiNRnX4yMJJrM1hZLzEQhsBkF99RybYwndFKvqMnxsT7pzJyh5aQjfHstLDUgcJjuQzGsYjamo",
  "key26": "3LSmXembuZh31FiffgKiaWwdbjBneihE8WAk6sXiPNqyQ1f559Lp6k3iWnVvkodUGiwJmmzXbCKbMmTsMtvad7pU",
  "key27": "3UUw6T6G3qB4CATkuEAsMzGHHdtXCGaDoeoVWkhda2XfFYpLBY2uADa86ZNPfjV691KRpCzcDnSGGauaow5dfAby",
  "key28": "CW3q4ZY1zrERZAb2SF1N6Tjbc6mdbNwvY54oEDwmvaCt3TtuRZiTUt9Vi3X9L6XLVGR9R1QReeG7ygV3Az3XTYJ",
  "key29": "5Mu1U1agMxNJeFajYWrTd2nRfeBwCE9qs8uXRgmUwgomdwwLpbVuYeyPCgSnCFwx4XDwfDaHNYH4inJCTHehs1rA",
  "key30": "5ZgFCcNWTtCNT1QtGEC63FunKeibfPxK8kP1kFk4h7ChxL2K9nQgTMXVMaUKvPQfKAEZ7TurrxXsockLUT17rorS",
  "key31": "42vDDA23TVJVA9xCsAskphdzZ9QRrMtnd3NFdiHHmSAvftnYT7htiRRg4dHqxey5t7x35aWDp7SiNaunkM2kQtjC",
  "key32": "396jtbpQXjcTTQhy5nz6f3ujmEDoFjJy9Nb3Z9vyg5oNnVkPJmQcPZxYeBs9jbmJ3D7WhSeCjxoU5FJiNDVJL5JY",
  "key33": "5vxLoXFyfjLfhDMTCRikkUbQc2svU9V2fw8JQJgaDhWbCJX4mznCDyk8dSPKo3Vf5Tzv1QzaT4Tzh2b3BuH7PBHz"
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
