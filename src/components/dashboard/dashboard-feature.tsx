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
    "2k58WyCZjKczCvWzUmM3YrXnXsiVCVVzgeE8ATosoXK6bWak9PM83S8CtPAvMo1oWeKX2SUexwsQXrSKHCx8XxbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9rnmZPKGihk4FHdtGMfiAKcF8CkJE73GgqCfCWtfJj11Kh1AoHBPAFLVvYVrG7LcJoTmPtgtDCMhM9VrW5ExMH",
  "key1": "2k63ZArJkDDMvsruJRvPF53BTV4XZqNCWgYNz35cdTnAnZN5C2EHofN5oNPDEX4L1ugoa9H6thaLLGFZRhjQpQ5V",
  "key2": "4VBZYGSwU9AEMrdFYfX4L9rMmN1csJcsGErmZHugdgT1BqzyhpPMujMm1xkEB1PLxia9nCqHDwPe3KuiSkPfenkf",
  "key3": "4nKrBUw67GShaz8LUpW8JXdXPfwm8ubxVBLNh19GAWqVpDxc7MVJh5eryrAHMWjrYiYCAJ96JTciW6ACbshAr3um",
  "key4": "2fYQMx1mhkicrrPJm8cZPM1kuHY17VPSAE3SHd5pCQipZshCH57YXvVNSvZRhJwsmnt5JUQyeos1Ly35QQg9bbBM",
  "key5": "2Vyx8mfdozrj79F3tZ9tm9iqJB3wuMtxLvHriGf5hErwvpPryy8artSFTgxECE8EQrdH1CgtQBHkTp2bgjsq67be",
  "key6": "5EQZfSkNtZpTKKF6wZ6Mr5Nu6czdrCg2jN5odyYhmDrffT1VMPg4AbrS8RTtBDZTDrtCPQfPRsPJrpsoNj6RYrVh",
  "key7": "DQznJAFbHkrG9uovv2d3FbWNVMpcJ4iFgvRpDqzMVFAfntEd4LxDaK3ed8917XbJ2HkhTQ6XizfScpUgmNrkqXR",
  "key8": "pfyxkrbSK7Gi6NUnWrd94Zt6C9XnzQLERusp567Nn2yKuLp3bMkM7xVE5DWPL4mBFqAhuywGqQPiyc95ZETUNEq",
  "key9": "58XjkNaXmJbLMifspwCMnmDCaVvgzcg9yfNtKRNGHx6wWnusoBVCGwBzfyRkH2Qmmc9K7PjAfgGane61EijuJbV7",
  "key10": "4xR5vXnkLY1J4xyCff7L9T1Wb8TD6J5Rpqx9CYPo2YRRHtc3DEnPPb2vpNX7pLEgBZgCYaFiMtFpkVcPH1Eepic6",
  "key11": "2sNvkhwfsfMJSqDKLzSZbncdjCHK66px8zgRQfPkUqUVvpWoDkpWonJzKV2wfgfEcFYry4jauT6NqMsM32V2TCYA",
  "key12": "4VAosuUiL79kCLSobXeaMvyNCoMWnCVgAHA7FmMS832BZ1vqaXb68QeXn4usG48gyFXsP1kVpiBXPLVQGZAK253B",
  "key13": "2kV1SpkGGeG2CRWbtGaKrhR8PfA5b5Dgq9SXgbNP7siAnAsRpmtnHZgdaduP5UyvbtnuFovYXiZVYJaatAQMXfsG",
  "key14": "2cxEijtCDiuDXyprQHWoAy4ejSjQQonc91rNECUWgsV2KMEttbe47zDHY8SxoC1mTvqMZmduHnYThBFKnLz9HKLn",
  "key15": "2Wb8k8MNH13H6AJx4wbKMDfLA782vQFNRBUkKsWmQN46fNciEQsazSdVruuJWG42qKedvsSRNAF7NeW2zfKHbEBv",
  "key16": "4RSKP7VE4jmvVGqNgVS2fngGYuMRDfSMQznkxzuVN94VmMA3iK6mBz3fv6kJ9fc5aRtv7cZA39JeBcWBRGyN61yk",
  "key17": "5FiDGhQTz7Cc1yCfMRKhboL2hYjhSZBDKbFnqByaTeVHvk9gL8TquU8NEm2qfvYSYov6yEbwDC2Q6bbDtVfbpVZt",
  "key18": "JrWmra4zSVwVxRDCvgCSDYNma2XX3hdcitSx3Qy1GVLmr33Ywp1PEVjtWnqv76Y3GZAXykS5ESC59GFa3LC9Lpw",
  "key19": "46ZLgrNPTUzstLFAmgJEoJT4WUXdtR9nZ6LjcdYZF9PhFGKK5fzgrkXZaWfdv5rfDMbDGr7AxRQgMG55cUZe6sLf",
  "key20": "3zCdj8Ywcqitjexkuc34SRJfBTFucQhnrtxGTxWVfi4ustpBD1CoXPjn9Xy6aYHcDViShzm9c5dy27p3zSXsGRri",
  "key21": "2kBssNrNSmRnLfLxH192EFC9r98m2SHcTkPnV87VJghooo76QyNmmQPp7eAQkBfB8BpKeLoaWu1orFzSUNbmHGwm",
  "key22": "2g4WFr79Kmr7RoeCYGzNJH2DjYqZYdciNyjdMXccnbsqmWPMkXh37EhtSiQemdELgC6x4Zr4gXAuk2HiEmE5funX",
  "key23": "3r9Yd3hcRLyYZMiUMYzF65c6FSN8rowBiP3AyPHZLj5dr6DmW5kY5AwSCq6FZpPoZpstWMp3gBy2S522PHAbyHLe",
  "key24": "2hTz4REya9g5ewAm3Sdj1pLUGVyc9R7SPaak466KjnWcv4g649WbkWiAAizXf2JAqJk4oXUpjyWtx5F3YPBxBG6Z",
  "key25": "57Pg78A5wQybM3Y4wbQABmmcamVJ5NuQjVLqCY8FeMmt1gqq2nNrJnfzEkKJCsGJjwV1UcVJMmr6fKvJ5sajaHLW"
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
