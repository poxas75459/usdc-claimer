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
    "56rpNL5fUDC4Wwbre8LKPfAEUK2hfraJDM42GS2ZFp769Ut1ZHvaQQ45LckBNBcDHad7zKhdUBQA1mp2KeKZHojj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y8cyRqRmSVRPSjmz27gkbqbBYk748VuWpBsTv7dmyNdmDdGSCFE31SMKPDdBrn31k2aYSM4ABzXs8fS2ePQXCPf",
  "key1": "4a1Jw6WzxgpsLid8CnMkqMdunp7KRF7BCt1HqnL8shm8HPPnuHkssCeEd26d6TmbXiHWHCv3YmjjCQBoZ1MQ5F6t",
  "key2": "5SFQpf1vF5nD6WutgX6cKnL7YctxEBACgSPb7YFr79ccgw1Xcw3KQ66FGvNs2NYTx66rJRzMPLQMTEfePFvvNNm1",
  "key3": "5cwtTzx42geM8XaWvhpHNSoqZnsYTJb2NfPw3wEJ1wWoPuGDAqwhpC5jUccRD2exmwdg465mQ77GBD9v6BebEe6T",
  "key4": "4FTHdBpQKjsjvJEqPoxGy2VvW4RUt4hWQSZhwyhzcxW7dCfcbfDi4Dg5ipu9EcKGuHNtM39dN4NTVV5YohPX6kj8",
  "key5": "AfFSHrctM637yzU6Drd6RiNoZTEaoJV3r9cyWeHPSRQAcHuLZtieQWMKGYwzdg5tpX4EZTmixM5gfV5cs1eqUzF",
  "key6": "38sHdXFgs8zeoFFmb7prgDLAd3TB93bsyxcfhy5PXvHEm5xXkPwduBKGd3VAYtcJ7imiyQXDA6e9kTBx9CQXx2kf",
  "key7": "2BoTzZvYf7PK4RQfq2CYorrYWj4fFjBL7hhvDHvhAPzW3PykQeXpbHSJFZajLMBx8UZ35EjhePRpLLgZwNbxVkyF",
  "key8": "2iMZuSukSkYoqV2hWBMk92pWuB9J5h3ZsMbGY1eAuFnywHa6VkLV8zWkkDH62F4yTQZQikHmdBk954fg9rfNrr5W",
  "key9": "3pQrSePZneuuMSmkvgY9gAAqhwCNTiAizzfXQEz4i3KE6rBmYehGo2esgC6kmCUKbqfHxGxHNYMiT4XFSPaxaadF",
  "key10": "4SH456shFbexpNybq1a6zWYZdxE8JKhandZD2MpAAwpdZhK4q5K99i96fbJszX9PAdi8H9naRWFwAp6xeYqEXPQL",
  "key11": "2vsFRoszFW9c8oHdqj9AmvyFQTuKthVC1M56jv2jEhTNDX2PNvP9V2g4UJ9a7Vr4VZwN3xkNpVvGW2s7kQqeRSNN",
  "key12": "2uXhmCPhcAtiXAsfRJCAmXJBiPzsmndKrsvvp8L842VQqx6inbexaikfWzBZcnntGcXvG75guJUun3F6M7jseh9o",
  "key13": "4tzrr3Rcd2nXtCSUrHUu3BubeAzbCMG9ZM4uJCT1PfuVV1BZU2poHX84N8U5ju4SLXfbr8c1SzxgbG3WT48duJ7E",
  "key14": "5S2anc2r1Zuc9kPrLWq5z7PNeBHpd83BakjgrXfJTGGmUqViuPp9PQZQMCn8hS5vXYhmMvLrDXve9HZ9knd4PuW3",
  "key15": "5QafKbU6bKn4F28Dq7LRSENRU9zke4QkZANc9bBfxmsvmDKrNZrcwPSpJyHXPwKtg35oPLE48Tp92VYAxW41Y2Ac",
  "key16": "4WFTQWua1D2Z9XXaRysE4jk9B8z7JvZMy1MWEVGJj26TkftLCrsK9zhRYLkxoApa3nWRGwx7o6Kkn19pKTUVTofD",
  "key17": "3MAr32tXV2p7JGbvYVxLxYCkbUw5z72v6G87p4NQpHPy2WoQYdR7mZYhFQEeYfygKtgJdNZuBXU1d9JbsPe3NXdR",
  "key18": "iqwGTiUi97a176pnvPiBnizAUgwABNEFuMpJtjrLMwxZ31kfeA4GfqMgqr5J4NF3xjEEMgwEK6YPiN7C8fZpgwv",
  "key19": "4FinZDhiMxeesWvw7QZMfknukFubHxJFUQvHAEcazqNeX5fjUuH7rrx3x64Sck6TUcRcy8jC39iAJtNo6sicqBPd",
  "key20": "kUN9tstRQTqrXc9XvKKhTHcJTn3Jvhy2q34bDrdzYjYePsgh54u7XuvMTLHzn33JL1sn2A7cfktbunVxRPnPodh",
  "key21": "DDBKU2iDnhAFEuCfCJcJR9bjMviAtPUMk5Jb6hwyBMPsPDczRV9d7tSF2x4vPsKjL2CBGC4vLg2jsoNy5GrhimQ",
  "key22": "2UsPumYeyVuG3wheaVZ9xGeV3dzfR84yjthvJBGPnQwAPNbMRTTNWtdVkUfkPTwUfvA4ZKs6zjd3GfXJPLerKFah",
  "key23": "3poAcfUFs8GxcPbLZzqavV1svHeu1f9dLwuPtvPCUUuRNG8s7rWq3oJfykod2adE7gPeHQCk1dSmgBbTYfiNBhoS",
  "key24": "2jmRbAAD2ZqMUBxun3gWgQVBkziWn5moYG1stDc4XWq8avgCXBet2zBRafbQjg3GDpw9SYBhG79Qg3tPH2e9RPhf",
  "key25": "4dvUU53CvHVUWK9hwpbqdQxVSPd6rfHkk9GVr6kir2anZm7ASRiRM6WuVmDKum94QwE4g36sdVQY3m9Ri8n3zX1x",
  "key26": "2nCq7aboj8339XQ5ss4CyukLSEZ8Ua6KFTNy2Ya786QjC4uEB1beDECCcbsnM56Xi4D5LcwKzw4G8CMS7byc5f5x",
  "key27": "45mFJie41gu72dsLrcVMVy9ReWzaXugtRkFHfBGb3NZMGNw4efuSV1zQccWhugPFUqjPZ4jsnVxzn36J2fwf4VM9"
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
