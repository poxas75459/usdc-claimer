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
    "Y4vkKykvFaMKk3VPetUZUNF7WdGphG13QKRjddXgTvATEb6GLCZVu5Q9WRHZquo6kmpnsKSQ2rm12FtKnPWV6Ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ucEdgqawyGFXE18bGq7u6GUUpe6GxxY1yzmF8nx6YjtSCZ36G3m99igUu3ZW2jwg1QNyg6hRN3P9EwfhVSxSbnv",
  "key1": "5ZJMxYpDrvqbHZ3pgbQn31f2RdPVpnAqp2AWVa3Ahg75j6NNTW8fpFhNbvFBNf3MzH5ZRQiB4mB38VnCFLxTVAg1",
  "key2": "2HDd6uQEhD5Lz1m44xTxyxsk1g8N6eMAjhGtRgzhLdP5pmJnDDm6uaBggwPH2Fvn1fmhTWj5JNca4rmqpfSLMmQz",
  "key3": "5J37k3yVadMtghcZzBjFMXEMEqSfSdU2a6AXbg7MMFwgVjUCGd7E5uVEtqz4Jgge7eWm2YsTFH3PVdNJmChCgeuy",
  "key4": "34MLazdbLD8D6iCyjgHGvFvgmp6ND2vksaFqWUEyUKKGkNCGq2ULPDomt25AmB1tMrwjHVNNGoiC1UXKPJeeYTqR",
  "key5": "3cAaoahnKxm955f5cwymrQS8Zm58icToCM4dotnMqfJGPzsKLerHxRApzfC7qfiQ2hqLeqdg7LaFvwQPiSCT4NGo",
  "key6": "26SNxo3vNM5V9cAcRFJcsXjPh2kiobf3RehdGzg4brkSDp932QBDPD5xG1FiSjikkAeZKgsVQ7NQC2cYHdkhk1F5",
  "key7": "oWCL66VvktfFFhKVcD4ReHcfR4RXzep9iGmUgAkKF7s3rudXrkWWU18dT5x9zfm8QKVcZALLMSmJsguvjFtP3pm",
  "key8": "vLQFU2bVnpsPNZp1GpRi9ByVXtUWPc2aq5QJSXrYQmcnLhmdsCVPWfx6UPM3mUtYiCmaToxC9tA3SK6hahCVrYL",
  "key9": "aJ7EigAYo3r9Twgju8dYQwiSNvWsGzmgzfhCHmiz8cu9qmyKLJP5zAyQag7RsKMcqeQATwpy1nF8w3S7JbcqrWX",
  "key10": "5yPFXviqXNWZWxtH22t5FsDmsVtMNm2dh425pdsd3UHsUyVuGx3z8WDPLf2KrXs7scgAqTUq1B51yAyctgwCBaig",
  "key11": "4detXZTNpLgrb8k3KASNgoeUA1r14yEVECYF3oNckmWbrwCKZ5RAdW2KHRiW1iBmxp4n2dazafhZz3qDkpSfP1hG",
  "key12": "bZbofWgQLjfD3nBEJAwRkSDqqHdnTs2e9Ru1KYQPaPK9dqX1yxMQLFZdikfmVtkGWEsiC9E2NeAtMdhhTDRfdSQ",
  "key13": "5hZ7FYXdGrTYFdRhmn7Xx5Hr5ex9qxprgBS2CjhgtxWdEssSZSTVXTt1MuHbazWA6DMJtHejLgwNpXoc9gHUAzBR",
  "key14": "4xKaYZQv5eTsACtFFc3uEQKmv4yEGexuTvV9HGKvMhqfEgH7eqiuCgmwFxyjXypcPaUviH7XNoBJ7N879Cp3Gi2r",
  "key15": "2S5oJvGGW6vLLnHF4AgtQVvm9pgDhyDJ8GzY1rUunwj25PtqrzZdcySguHhHDC9AAdAVj43yL3shBqhiUs86tqXN",
  "key16": "rBiF5LP7xSHPsCkNKcQAPXtGsBiZ4p3idrkxFuc3gLY78hjQiT4MUXwJtFnw7MZrvcEvqdAhxcmomUwB1wmmp1m",
  "key17": "4HrXsL5qHBHsWn7CYY4EAhfFv5eNMjXLswg9XcwTu9stadgPfLLCpkgaV5wD8Txsg6Xdvypn3tAFT3D6L1rwPp67",
  "key18": "2j7SmcckKMxVpBWpK4cCGXXsQbX89WR12P99UxzmdA47zT2R9g6wCbk5KK9KuVKpwk2sPQzTawMxAvTtJqMeCCew",
  "key19": "4nJgKZhy6mAupPCrRz2VCQKpHsrRWfgVWjwas4jt3HD92BAxuUkhmdApJiDXEWVTkSRUqFztbBGdsJbmb1czsqiT",
  "key20": "2P5ydBJdsWeWMFjxZQm3uBzEBMo7Q8Lh1UmuQEQnbWuqzsfcmBEefiWCdVhJXMQNFz5AkRTErJsQfyg6RP8T1dmo",
  "key21": "3UbjwUnLtM1QVGAkE614meSYp9kkqD4eELp9BretKfUYMeFLbprT6CE4mM5fanikdxreSmMH2hLJubqcA7Cixi1Y",
  "key22": "3f7pTfmaFugujwupdVyP1cBkbk2C3koZBnQPB5bRuaAosPyEtZv2jqXzcsXMFxCzJwjNfAujdZGF6vNLvJ7EhJcP",
  "key23": "4PJf9g7ycfHXmbAvQpAQ34qdznXLxtREyVQWSt7mzJV4VLGMSaJpvDtoWxP63vBhrZjSD4DDdodS4WwHeW2K1kQp",
  "key24": "58PZLRReWYpkCQf5o5XGg9PQaowUEYUtu8pWNdEaMSznH3cfDANmhvFdnQbmTYkxZFJY31ocTjAsFVuFqfL7Zewe",
  "key25": "34zrTGMWjtBdyDDDbXYcf4DNGFXqWf1D89rRJDwKUgAft5Kzq4i2D64h8wwaLyLRzgiGB2ereqgTYfyBsSEDpATR",
  "key26": "3K3VRyZFPgJiYk7kAtJceny25A1DextYkaqKMo894roCdJWxBue5qjZwz4uFSvGjNTZ639AXf2RvFT1UmmvRMegu",
  "key27": "5AMytqkUvMDE2Z2JixZpacJfbWfio8c8idEdaugtgqDqkbn5RVv3dJG7JB2WxPdL1Yvodm4TcJdaKL91UWDVGe3",
  "key28": "5kEk75RGEtmeEVbPvq9Kp6bU6owk2hrWCs4H3xsyQiacHE1VytzoQDGJcb375SCi7ohpJh56vpL7cVvod2v9YhiX",
  "key29": "39w1bdZLixG1oESHxJnqCYjVoU1sR3EMZmkHYjMHuNQLE1hd1N86HEdmXNKWR8PJP5vjSmNk9PRzWTKgcpZYiT8G",
  "key30": "rRZqucJrLsAqZUPXDAccs1cR46tR54Xa8DpZjySCtmRVgj1FGX98RRJj1pjVuVhVXZ7gNhfKzESutLXN6YLSt2m",
  "key31": "3AiMoETvz5aQkafaRtwYnxMYnKtACHHxbWVfsM6JmNEPgqRCwkkpk1TovvsdUHvWBPPf4C82uRAz34kePvz5fNoB",
  "key32": "5y94eMNZ7ydarCCHVPKF8p2u3ViSp7ckTzD1YUucrXqTQT56KVPZJyfXRvembr8K7bj9cpjNXsox4BEVJ63MbpnR",
  "key33": "2JEdyKWi7VTuqtB3VxufwPrPVDCpFqwjNLR3zAFbHL4T85Ws5bcEDpP3iBpDGrkhVzwsGLoic5G28SoUTXaWJbLH"
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
