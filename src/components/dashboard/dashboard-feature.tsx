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
    "2NRigoENQsJVJbguVNBS8ynhjH8FNVaQb3eBfvK1kGApdVTkyYnbYGSDLRmDw5SUYdXGbWe9f3MbD9vsTQnoCrTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Am4yoCHn2kW4VHe6UnReU4M3qwK79dj6QPChkrytEKFA29ybmv7VzHibddkUT1PaxA9SGZxXWXmyKpDCG8kqbof",
  "key1": "5MJsb8HBxZiG6cCKVuHt33Gz45fWhiyT8FmR25hmCRStCVA4752DqHM5XCmXHtcgmkgnkqSHYAKbQppXJkVXRf3K",
  "key2": "3J19r2CnoGAZucBhdWqkwTU5N33YwNAYHTkbqXuVcFar6NDq4zTZV1P5oXP4iw4oL9LDZXKjkAVhe4a3q7Sxdswy",
  "key3": "4y82JDM8QYi5rFQi2HmxuHV2nbykvte9BvnWncBhtEmpvgRDZAN8w6ypfXNmH7Nas6hDMoiJSMrG3soTTMDjr4yW",
  "key4": "2cCwvPrGwNuT1T5bPDHzaB2MbzUjSJ79cuZsFK9wmKh5t6ULYgtm9SqpAnGJb7avi467W2wjoWDp1L5SV4x5eQuu",
  "key5": "4X8nYZHGncXh4nZtcbdBgVSmuxr7eMx6sAzdTR4yDN3VCSCgJfepUnqAbfYXcmfxFgDjtAEg1gxWwTxkY9NrQAMJ",
  "key6": "2NGfdKNrSqp7FrbaHicjiRjaGcV9jwunaJXWBVahnZjthFSdTxgE9KCfaMWuvDAoVewzRbscLJN9ATxGBUrqYruF",
  "key7": "5QTCRintg23S1tiuU8pi5Qx2fYk27kDcUaUZD219LmSMohTzP7FAoBXKovSAWdrJNDqAuuUm74s9VCehukU1s8cq",
  "key8": "62Gax4AHxgwpAY5GoBCynBzzPVCecUtrQQUEL54zDgnRBECfPgsdom6E1V5tGvw7NsJWiLBRNyGuci8dfevi966c",
  "key9": "5Nj6UXPzrTnaVUsjPSjpcSqdT9MQsqhg8GqpVcxzitznSECg1poR3zcyWzqEaRRPMHrNVbNp5NKsvj1hwXWsAXbW",
  "key10": "52fGheL4dHcp17BE3eQk2gUux2wFaboLxPZwQDuYMmggtdQ4QWaco8HsfBXgUnWUDT4jehq1Y9UapaGdCbA6uNA3",
  "key11": "4M5vmFSTtqp3yNsnMfUyCTpEWi92smYDhWCYEawPowQZVLieuaKALkiWm9iDgjns18Wo3gZApgfEdDx3woaG9h2M",
  "key12": "4BizhqcGekLSGYKLo1Ph5QRVwbokgN9m8pmzvfV2idzJWveaNnXcpao2e5xVr9jB8a5DpZqcTXAMG9zyzonjSWpY",
  "key13": "5vrqYntRa2uPWquDHZkG2gVdxciBfWMW5uh4YyNMzRNsyq8PHxSDdjfL2yhPVaDddJuRbixrR392c2pW7VwRPo1H",
  "key14": "4tMCGxNj6emS2rhJsAUuWFW5GCJA3WtFt8zDPDYvzwPRK9NJBtJbaaiosyVCexr8MAXvxEnUYSFeUPKGr8UFGsfQ",
  "key15": "4nnRzD2Q1kZKdkrJcABpXvqML3Ejx5J9zBbMGGGpVZ7XG7nnvcvEYVM2uvFeVzspo5pyp64YHhi2LzKWukg22qVW",
  "key16": "o8PPgSRhSnLMHk3icksrqwQMzkhzpPCSM6qwPsfdV3aeWQ3Yuf5XNYvMgQXKNcubFkd3VpEJaD9c582QWKRk1N8",
  "key17": "4E7sosRq9vdmV9KNrEd3fPEtKq7cUEqUCeQKsC4FtNZfUjANJdm2Hrmf5jxrXxEYFsYfEn6MFm84muu5Vq64q2qG",
  "key18": "2LV5upaSgHNnwEMffF4eK2613ED67zTJn4W31PUw9h87LRoa3aq5R2Eq2i2DFcCyBXbFRMq9S1Q97vj1AtVXdtsS",
  "key19": "46pcYR8QzmVKbJmTDcsJsede2ucVjSbR8KhEPNoAfLfCUDTfDS8AUfaoJ3GRBEf9VPo4bxY5WpD6vKYHz7MyCeLX",
  "key20": "3W2rgBbCgPjVtSdTj2qUc9jqfFZyMZSCPJpC6TfAgHL2n67EPf544qAxAEjNu9SzcACfctrtRjejjtGx4e6uFGgA",
  "key21": "2dyikAaTDuqTxAqjNvV5SpjBqtpyvB78uSxiMS5FUjodKLS2GEa1ftenZ4BMZyZKD3pHZHf5Z8ehw7WhNSuhHWjN",
  "key22": "5Y7BtNWQwBk8RBUpimrT5pEPn5my9vkuM8RoLoApBzj69bjkn35WYMQs1978CVnfXLYA7vRjsLwvdC6XewRMrHq6",
  "key23": "3RYyYJ1seTWVaiuGPtVdhMkRRE7wAX5hRWKLRsQYprnGg5KvZVu2kruKwZi1MJVQjjX8uqWFfZrRPJrmiMSt7d6L",
  "key24": "4g6ciTNjKn1rTNpBLEw5YzMtNjLKyEaNUixiCEyE9ZqKE5TxU1V1zzZgFhxDJuDPcSph5F9oacSYPBt6raGJmASN",
  "key25": "4HT69Hqc8m8jhfrWqrvWLbaeVc5aFdV1jyB8RpyCyx2W7RdjNN1tXRH6Be8pwDMngBgpdvRdx6wkvFbx6w49GJhz",
  "key26": "iAQosTfk8zCDCSfg4Weuu8oCBPBvucRD83jGWgpkVZYSPfmVjb5KiQ5Jaje5qVMgQgpckPCMcMLRY4XEfZ8SKmf",
  "key27": "3LP6LEy3kTRLDWf9aoNobRHjbYkBonEVRqtsx8pQXLbt2798fyGhgvwJksDXu25DAwWsBFK9qsMoDn6DCPBZZbY3",
  "key28": "3CYqG2hjvSHjjgQEuumfhWhFFhf7cGj51PEefDuuFuZZonN6NoUQMjS9y45EnyYZ2cxcmBWuKVB6mQ7RYNNRqWe9",
  "key29": "2STu5xSEMG2hnX7rUcKVyxxrCShR8aVMJy95w5qGUehFEhPNrq2bxABy69tBf5LdBwZS58hjX9egysEWMbcjGrKa",
  "key30": "3i8313G1ryF8AggCR9SRzqVdpxUFa8CYiPeY4gNSpFg3uMHSzuVdQiYqNy32UHo8d2Vn24XbukXwQjtDNr15JFkD",
  "key31": "3H1MGbnoLY9heP1sqZVwTT2Q5zvd4kfuAdeUCX5FV1kjGVRMdxeodE2ejg2tq9zeMoEkHfBg3bNBxLwcTqPKbWEc",
  "key32": "3dvCbCDUPC6Fb3duPNdtF7ojsQic6qS1auJAv6nq8P3jVTwTYmFGFUUXbwrP7jvjVddHjEUSb7p7781yKPd9Z2Lj",
  "key33": "zZLMpAVmGBHfKF7n8GtukKVJ6jwvnwUcQ4AECuyiDLCr9k2cLAEpiHJgr3oefxA8yXMYW9GfiDAP34fUq1469Tv",
  "key34": "2pkku2kGEPGp7xd9gVapSKp1srsoUcmX1G1tDcHfMFVfVFNBdMRseVof2zS4Uo2a3M14F9Jf1UCf1kZ5xyfCfEFo",
  "key35": "2GjYdvud171n5ZGwJ983ZSAswa7xVEKq2BhmQTGNswSBVQc5DKrRyk2QiHhUpd1DpVVF7FCkaLDiApxUokQ7ffSK",
  "key36": "2RUiN96vzswGNbkDmxpnmJcgt73MkRnHPNWDYJ989FhxXz3eaVVFyCHq9CTbbJaAPtuf6BjWKXvUpzbMpo1dVQc1",
  "key37": "3UCvnrcK8PVLc47JS81r9GW6LpMk2MPDxYbSauNvodp4byDJZuqjgGHL4L79WidPxEc7ayfFTBpGsDKLUPQJyzXX",
  "key38": "2ru4SSXezKEysF4mNPz8B7zGAZGofNpdK8vkdjJzFFSCjRbu3hdT5UcBsy8pCAW1nkczDTzcpwRWKZxp93Febvv5",
  "key39": "3nkyfBK2KsZ5Ro43JVxxUNheHzdJoTyMMxe2MZioRUnVsum3LSq7MvaPALdyxpbRvFyT91C7QY1TmTbCCy7M6SFL",
  "key40": "3F4uF4U4ptRXxxPFu6MXXzroWwi7QH5SQ9QC9VZwWBY2QN7f59nHrMxMACRKtNbr8VM18Y5cYDm8w2LBrJnNoCez",
  "key41": "5y9XspYmHnueYYQXypmnReiUzRuN3it1qH5qRdGtbY8B7pBDhX24NPcRpLEKmaZzMEwNHA79aFnFKMYzQ1SmJvub",
  "key42": "Z1yinVxcPHbn9qxjo2nUzDfgtgYo9eCXVra3jmaKdkGfoKib5ifGCA7CSM1puepxdTvgTfN6FMHtDVYD13wwMfM"
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
