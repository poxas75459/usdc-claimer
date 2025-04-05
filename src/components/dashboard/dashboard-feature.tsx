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
    "4ztTjVK25Qj6ZvVVSC7Fiumz9BDuB7VPPaoygfqJnynwbVkDpvDAjTjS83h2ixepCSrra79wyBihfeueHrHZKLmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "375fY17oSmbd9r6Sh4Edef7eWXamrtipbWTGA5Fz3hkLx7ibTgs7cH9tprd5owD7fd4fJib4wSFTa4wak2zEArfT",
  "key1": "5MCRY3bmxd73k2xHnVMYFN16WZEFrT648DVTK6WGeHM77K7hACrVTQ7nY7bXRCRQ8tufWVmHYFSxShAhF9bgHQ18",
  "key2": "64KULASG92oEM7kbDC4XVWGhHnkDwEPvof7jDz1mRvw5wat2sNPZPCuSx99BWT3esk8YQY2NdKX4jfXSRSxeSW1q",
  "key3": "F1hqJfVfo2xPPrbks9AWr3Eh6S7pSiBLhKrMTK23Y7hnC6xCgLKrsNnBwYer6d9ergveH12tMH6Vgj1uQe5oP8t",
  "key4": "3hT6aNdM941ZxhnTtvh2425RosPzoTYzCKxNBurcFwpBhi99cdZVqKyH2NQNio8S33FnQS7Gt1vhHz4ohHw2Gvhn",
  "key5": "5fewwtrbKE4aSDkU8834LFyNitJyJGoAiT7or4naw52eTEHQF5veVdo1NNcUcsG5NhXr6c9UefLDCDcS6i5sYNyz",
  "key6": "5YWzAHxECtnBc4mRtRh6sC9G9CoCj1KUuZ9C3dY84RnMDiKVUiT4byaQommXyxVTuiQjmFFdTrqi8AxwwXfNMB1f",
  "key7": "2hhMUNKGSsDcskHZMytS6RxiaCCFZQ8weKEYub1zxaBqYEiQBAhk3Nwtytak7ZwYvDTgBKcbYuU4Xn6LLWpBqXeY",
  "key8": "scRGVdZpH6WgXXWGS4Rh3nQgPzLz15iUBjw1PvEv4UJxeGUny8Ag6FZ9V3HFLXgEx571HUFGqWUFUhQBdg9jBYM",
  "key9": "2v78nhZnosTeqYtgRLf5p1wTtrvhbsi3LrepxX9FzqisXGM9kXsDzMNcJgFkuH2ed15a9nKGhKfWgvKoa9ZnMXBu",
  "key10": "39h8P66paaZnf3VrwcS1xcoPn56ADBwbSGF3EkN1A2ZGU1KMQxjPcxiriJyBVPYAa8aT8HuhJbKpNV2CSRUYFeyA",
  "key11": "5cb6j4AmAJUMAqz1suiYGapAyM4goTkFMoHhmzzj4oUKZoj2bNGiVJveY9r36jQJkojqJEyt9HpwNuPJwEMuKX1q",
  "key12": "37qk2iRv69eZHVLCh7NvPkCTMjbiTdBzisNZ1YQFANWXz2tYhZhyBfwm1pMh9dGz6fkuRLrv4E1SifpEMmvUq5qV",
  "key13": "4SAHfghSSC1NZ8FY23wnGfi2UtcfELFpFQpcev7ZoAJbxvAxpJrEmwVmv76iDnagDzX3ZyTD7DgS26dbgzHfH5fF",
  "key14": "478VBStxg9VhQhTophqedpzMU2SdTYXXj9q881f6pS1WCeXMibCQ1t94LatdgsF7d2S2NCMDgMH4NMP1Toia1scb",
  "key15": "3kdagoTLn9aE3wnL7z6UvfnDz5k5dNpXYoqgqNXDy4RnsSS2bS8RhMB3N54wyobY2Q8uer2ev8drjjqxyAWL7FPy",
  "key16": "2U6ZudoARrVZbAXBwEqwXzHMrfqcEWkYXwLHzJJdPeSzqAYtxoPbhx4Gk72dc2q7LFEZK4jwXB6RfLDhWbDTDjqX",
  "key17": "oBnQb75XVN17P2tars5jc3juX8tgZtoGZ5292mSBL5sGCYvUAw1k1rzVUzwbUm9DrUqJ5USDQZmbRGSnah2BELj",
  "key18": "cXLzpPjGFLUDS7f3PKSHX3ZUVwFCMDaydXFiq646FD6uVAF6Co3rsQ7YgjRLNbE5mMWVxRZ9C93XJ9ECpho6n4e",
  "key19": "4zACd5jP9kPMzW8gpdNc2h29PGiEc9tTBGDxeDHTgfuDRRtW1PcFcbAjhFKWuB3zUxExT2hvGcpB3t6J69HPmpkS",
  "key20": "5scuuRaABo5r6yk5ev5Y8YUpfbtfiSw3YduGFGufQoVKPw67BPfNQaHMCwoFYpEKqf74EYYckTFSMJUAX3wPM3W3",
  "key21": "5gpAWsg1zTSWTtUeqkRw3zRD2mik4AwLnQ8DB3Bw5tcJt3x3w9zajX3tZ1m9csP2AM1PnjAuYUV6Bp9ms5qihNmS",
  "key22": "3BNFohKzhsa2a2Bpf9EG5SCQ13mx3n6DyFfv99rb8MQVrCvrHSUrmVCuQtdX3ferdnNNCdeABrFp5eZ475QDZEmc",
  "key23": "3KMjDachrrq6j2vUdMYiZ7nJ1ytBPTvxABCm2LUtfHRZnw8BACqq2U7oDzpam2XLP7TbGg5vJjGY32NMhAnJnRhD",
  "key24": "3mqv5rZPhhfb29REqJxmD2kDh9WocEp81xPGYG6n3SZB7uMiFoJXwJNn1bGZrc6wX1WFkEtJZWbG21n4tVUVGXpr",
  "key25": "53sWabFHtseiP3vGgyUyymgtkHwm1dkhDEDEaK527AHsn7LkksEtsYiEiTvYTijWD7TUB7gdV1QwxE9r26q8fjYJ",
  "key26": "u5ixmA4bgBr4WdJszEUrXTVtR4andnJhbeyJqNWFr2BxQL5D2186Uz5R6AFwvXTGzdkFNSoqYsRUGP2Yh6k3QQu",
  "key27": "4fDNi816HKTHQLW7tfRqebsQxYeEBTZthKGVjvzQVw25VhFDxVXjwetUWmS11TP7JKcgA1LDEy3ALczYRnHszZs2",
  "key28": "3LcvxybQn3emvKfsv2hMjozrERJsKehVKCfow7iET1RNc1fbwfYBr7PMip8vxf8fP31Bbb45nrtsPifXnucPZ9Sr",
  "key29": "5phNvhXhR5DfDXciaRyWtBNzKctenSXW7FPfjWDKU4JUe3x1k8EVRspkm4s3MGNjtJVHTUmEiTjpLeMD25zZSu11",
  "key30": "RMQu2W4aD7TFTtcwgmG5sNbqvE2Wi1t3U49STD8Drp8Uhki83tSYwRs1rHTm3ZWFFtDMxAcMkETi6CGJh75rrpe",
  "key31": "Rg1pbUoi9b6HdQ45tPwNV6yp59XwVpGMo274KQffxooo8zEpxizQohxNHqGRGwB1d3WNwxoRKXwyGizrEAj64fE"
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
