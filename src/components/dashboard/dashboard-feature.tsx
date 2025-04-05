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
    "mZSwihorjvgwWXgAZ9ihYQ8GgftWMxzwPXZQzzzRpznT7MuFM421qd66hD69zmdqbxPweGbHXVzpi1VT2qvTfh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGoLmYURGNJ9FuLTBQufNPqBmdUSrRKxY69dJgZnNASugy6YDQ645CkaLUHWDXhrqfEYMhxCczgg4P2JT1bZvPJ",
  "key1": "4JysdWRuoEg1LqGkPmKyguQ44TM73p4NQAeAMqb8UTTz1Pj5y55ezdEvKCUiBggJ3gtT6qzXfPiFv89JzRFYSUcB",
  "key2": "AS6RV2rTgtxLFHW8wTBLMSH6pCKV8YN73m2kSSQ6rma9TCrqCLrWjmdArb6zmJe16AM2hfqPjNGnSJXxF9JR4CQ",
  "key3": "2jBRPr2PaTs4MUvbhqK4vobho47VdZrp4KBiLJGxwyxUckPnn9Xdq8zZtakwGrJ3upmkSwydM5KzGxtP6arsPECN",
  "key4": "4nSR1kX5SVMtf7vSGDUicMUzGpdacmiRUCBA85Jkh16N8kEbgpgzVVLraCHr1goC7PeAdinpffeivFzkfs5Z6ofj",
  "key5": "2S1gYtDkMMEnaEvwSN5xqyaHdgwFdGF4FG1QauWTFVaGepWJ6jPphibADERkzX3G6U8J6rQrzFEk6Rjz9kp4T2VC",
  "key6": "66LB2tfjEyxNoyaBSgBi669JexUfFma1k6L4rm3EtvRrXrswYqiruHYKheujs32KD4n7xZS4kf2omiTGCTkxg6Ls",
  "key7": "2df2vefQ3iNfoM66neX8bpwcv6QNVmgowSUuVb7iVeixPFDXS6qFDDCSW1mop5C2M1cRmSZs1mtpsBqaxsbGrcfm",
  "key8": "2VhmARwcqafR1aTzRKMjAcEiECBoGXcfiXFdbDgRT9jMMX78Y9gSHsaHFsXqRvt4wr2oxrx7GLY4dkFfqBf4pJtp",
  "key9": "5kfixA9CVRdwmoUvXTPx1NfxmNrBDnD3xeYVpDywRjKfDPQ6HKjQz6wgxNi8Dkj8vkBJocdHSayN5TVjtfXJouuX",
  "key10": "5v4Wo4bwhHfC3bU1ydFxvrhGdFaNxNztnnLPb6kUyLRV9dyJHa3Xu2X3JKSVDDtMokN8wSypTtBKkwpRnmh2tseu",
  "key11": "4J8Ts3r85hRfeT7iKeT3rQKLJtxGScw82SndD7bbPbDKYQtPgx11FyFvmn8ZUhrAphSX2Gyk46ujUaSW5sPWLjdU",
  "key12": "3bLTgM4xZs9EaV5SrfMVC8W7tt7NJEBiQgXy7DwbLWZEjbUJ16wEwbqU1TECX3nFE6iLWG7c2qLReb6Eav7uAKub",
  "key13": "67htm7W4XEVRBYFdiHigXwcRRPUbM4EhvfL7Kdau81mHfKjqRpVHeJxd2yA4MK2b386RZnKHcEh7BCSGCDPcpyWz",
  "key14": "3fT5HJFATK8omWw8aww7XcyRg6qpMNN6CpMAhnXmVLZnUH8tEWMPYsXgi9PQQLDwy3axj5KpvetqsuDtSBV85H3K",
  "key15": "3R1UtBPNn9Po4tFRUmA118xD84qZiLqfYww46hTDQGg3XSzktdfMZHmFqCvNCKJTtfFUDi29EoDupNsm4HrCg5Cq",
  "key16": "5phkhtYcUQixPaiUCo5qrBqb6pUMQoTYf3arY6EHTSFksLi6Dr2M5ckpjeP8Hxth2vx4RnDXaVFMzbHQmD8vujpn",
  "key17": "241uKMtdUzzbUVCvPu6nLuYbMgjXK5trrwzrrCbhvo9xSvfJic7B68qa6yKjsKs4psdmk5QCfqh8nB28KgsBnM6c",
  "key18": "3QRAGEeCJBpJGKA2vvNAgp2QVWoBVHkGMv3KwkzNRhbiXk1BuWdWU5QHzmTtHodAxysErq1hNr1N6sBERbnP5hWR",
  "key19": "4BP8cP6d5RgZfPtcx8fBP5LvmNVN8orYyisV9FhXzQPhVhqgERH5JZD7sHKpx5cA4yY6AmJGFeH2bDLoBsFrxTZQ",
  "key20": "2ehJzdVmzSkZeNdvprDvpUXPq59CpuNLcuZBHPWzGAYmcCyr8ozhVndc38TsUhZ8mXLwyweMMmRnzBvsPRdXfCGM",
  "key21": "2HFhd77s5rSPzgq99iwpB7bQKah5RmbkwDG1Cu47Jn4ntfN9f8aGFezpS11NKzyapnhR9MzhHfyEjUWha47dUQv4",
  "key22": "2NYiyUyuQrXExS9cJydnxDkiEE6oTdjrj4qSdj7doVPeHyBJnwtYtC1PDx9GSQ8Bk3jH2aub2oF2332waeu5ZjuF",
  "key23": "EJHyXn3zsW5dt6pPyFZSbwFrPoAuLzqfX6w1Pk1vc2ZhCjBJgStpEqza7xpk1SBGVLqZkeRhzuXDo8UMahTafPR",
  "key24": "25g2Wf5EHRqadfbGqMoBU57np8PHtKFcaN3BjaHDLEnght8YvjY2cDG5uWMZCMji52Wrsq2e3y61bEbEzqy6QjLA",
  "key25": "5SLvDKoYdx1tnEHTjfHP3T8xrzxH3A54BTNVegXwEjfjmoWF2i8gr96EgQ1rqcscVnMJ8JMJaY7tmZ2QmedSjGsR",
  "key26": "65GP652QbVv3JbV2eFp1sq8cNJWX6CJijWqpyJiZ8PCQnVM39Sx5xNM2StXovXFF3jFHSFbNeJdpuVLymCdj7Gxz",
  "key27": "647j57QQ2JnWxPxHopxMfwbYoesZaUkK7k69dfaVWfHaaxBjpjfAf6tDT2tYovmJ71m4QX6V2CEnJnpYoqxgicHR",
  "key28": "4gouVNzmmMLytEh2L25xizunxeF6fhTZ1SgmE3gzH1hLR6M5rjphLkzaj5ApTQYBMmFazXbQsDEutGX4v1SyrdLb",
  "key29": "4MTaEubqampsQTkSwnahQEuDr2MkhkNxQR5hEyTp6d8KybrvTeCCie59d5S75FJJeZEZVkzL7fgQhn1i7vq8zSk6",
  "key30": "2Vs38VwNsrXUHcGJKTbTTUpuwN233nPiwkqBbdnwHtp8UZXgrj546WMJk8QHFE3JFT6Wa1S8ENGbe9WhfSbqMTiw",
  "key31": "4WPLDJ21Jkxzvam91U4oNGgsGDjiPzHqeiynXKa1v1FRBvb5t8kdRndkqpFYmi8pMdjz3GxKqNF8eAqM67cvEckg",
  "key32": "3yrQEY4DYXwSFrpqxiWQDGk6QC75RhrRtUJ3pvyMYqVDeGRyFK8tVhfmomWUcBKwqijB5AqS5dp9JpGbk8isTbNe",
  "key33": "RkncATxV1JHjmgadLzeY9GiQJmc8bFW6sVnhEzeb1tCytfhyW7QTsw9VFj9nMKtjsumjm5KA4Y2hqTjhqcR1Zqg",
  "key34": "22wD4FQKLugmeJ3KMNfya5vonbaDfccAwF5j2vhbqdYoYy5Uu78BTBkYCgkYpCzNaYXzfruFD1QRPuKbcoQ5mc3H",
  "key35": "2cGjYRvPebSjkp2g1W16fG3ByBCpvGgYeLqrXk4wCSDV5uXsuCLjCqp8T6ACuHN2wEt2m1M45UWKkaxf17TNFYR8",
  "key36": "4PK91UBpZFq6ZWeVvA1Yw2T5nkXHqjuGfe2u2EVrsjruEwx8SLDhPJnhxUhFtAXmP8urJxsvMo5qfD8wvDSsWhZo",
  "key37": "5kkU3MorFsRM8Mt49phVSVuouXsV9DGoP67N5muVjFftRjN8CPXaygnnu57H8MQv43PcJ6q98wb7jaYcu46jDSbH",
  "key38": "5EFu3uJNYy9joPNvtjPqSXjTeMYEN81bKVHtDmNZoLyFhrBbRZQEQtoLXbbMe4BPV4jRgwmSaGj6d1RJaGE7g5B1"
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
