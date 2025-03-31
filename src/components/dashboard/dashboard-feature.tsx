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
    "2e1dqho68rpGGMSF2R6F1Lr7mtVgyWN6hWJC1bkY6oytKXc2HVaf1f5yYJ9DrLsSeQpaziExLQne5u4d5UM1g3XQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V3VDuPnwdiPcohjDn8n8Sed69LQuuiKbjmmfAQrHYdJJo9RnbZq1bfFqi8PvgfXHeqnhAnmsENiCgqdRa3u7re3",
  "key1": "5gJ5Sdn73azaknePiqyopaXbhvYWT5dPXSBKoX7oM9DzSJzCCgKQWoStFUV3Y47Gwb8k18GCBtk5ns4enxWLDbCK",
  "key2": "5qnJv197iqetKYqXnCETC89xYPJEWgrU6NupVxDM69YUDNdS7EcqZiyUZm7SPfyAPSsvrcer9hkMmPPjaNGgiUEy",
  "key3": "5YJjHw8HSsoXFkAMt7yFYa5oPXi6Vg9R19SvFZoR7NRiRcTj7emfpRjAqQYQ2hofmm54utB88riPLrTNKfvonnbS",
  "key4": "32yqFBPShTfFBtBabscp7CzH1TY53rDZYdzGpkZuUJX8mXjZz3sAT7JG3UXaEtqfetREpayswCfL5jhqHSesGmm5",
  "key5": "4WEAr5pGkKnkDBeXB6nPjg5r6UqcYqet1GznkzgfFGtqp6FuCBXcFQNH2KJcfzMb2mUt169PW9yrQXMp4NgGY14s",
  "key6": "4tu2rtneJXYjzqJ72cpVGV5bLEQSzCXUtzGaJrCRnYMf8ttcmDvTS6gkUiqCKtNQUuayHYcWhTvT4Sjs7ufqtiGv",
  "key7": "oriyHxgo2e5t5Q3ZpZTwhxb6cSCcobZqj88WfQ8jf4p5RCWEUSkLiNAH5Jbrgx6MsZBU1nFrfRi4VaNoJirJm4F",
  "key8": "5gkyPmoLBgwn2sfHS2arh78iuughHUxmSW4uAcaVdbhZAepxpWMLddFEqBweVM3vjHPzohHdiXLTB4BtpZBM16jP",
  "key9": "4XaJCbe2KNE6RAbwHdcVX89kP5qfFthEwNEmojNTwmQPQS8XVpw4Lm3cxCKcy5zvWNUsk2SbJCb1CcXLt2rdkjjH",
  "key10": "4XyLWVb6WSFJ47kL4sxd8JaEn3BB6kNt6qdoEMfPhMS26rNFYVoPkZe9wBfCtuHhCXqgFctnr9BahKftsbScdRJm",
  "key11": "38dVF8Mb3b3xRdVQvwxxCtGFLzxwHwRJ6CTr76NxzLd8t8b7eDjVGEwQgij31z7gkwVsWwYGK9EECqFQFCshX3Lr",
  "key12": "2CVZaEGjQ1gfZJwRmvRJu6se7mJnNkvTJggmE4Z4MaXzKnQEcuyyghyDWgujMrwmFQh2T2ycYJAEB3HWD2BsazdP",
  "key13": "29dnVoej4BYvdVbNSfPMPSFroHz5DKKoow2xfk8xeLMmAZVgwaadRJ7GdY9SfkaVQGSAs9VS8hRS2Rbmg2DF54tT",
  "key14": "5bVdBhK4h5i3kkXBVArh7284vw1wNP3FtXkCw6YiKqMTKR3D3dFkusu47Ri4j86grwsB5pTcvfG83DUk8MgJCc5Q",
  "key15": "5svvHacLECyeNVxVnkbyZJ4iWAFZqGH9QZ8G21TycYHnXJdN4pNHx7Yrecz736RdbMs5mz5dKvmrgyCowvYi6C6",
  "key16": "5rSva3qZDPnKwy74ZevgmVtnY95wcyfczmRFrwBiYSgBWqryBgEVLwGZLo8jFixxsEgabUYQdG2W3Wd9aS6gDrBK",
  "key17": "4sFouLZ86y9FJfHuBSrMHggoqmGgbCfdQJytYggypxv8NzEo7RWKk3RPGXrRXQc8vMJ7KcdLYQGg3Lr3X6qiMFRR",
  "key18": "3ZeCobHg6RYKDLgEASpiFRVqZg34R26dfWCDJdSiXCDzVfV7ixEBHKphLjFTaBFgsQ7FsXzLrLFsB5RhfADVxQ7b",
  "key19": "UzBLE6WST9oYiFhvPBQt7djZAaDCFmXXenaPdy9enQSP7DYjXGgoM6VAZ9wQGXXRm24gj757LUTrvi1mgWzrZBd",
  "key20": "LtCVqYB6XKTxyxwRozqPj69tyVSeyVyYMq8TFLb9ujqLGwnXQ9JxQu7tcvMESeioFpHK79tGUihQ445fvwugNtX",
  "key21": "3cChb74L7ETo3v4hPdvewsnDAq1YcBECfFpznsY7r1pJhHMTNSdsj9zcPyMCuFo9KVSm9YzZW2YMJtHzc1PBcXsN",
  "key22": "5phEfvBjQKYL4v5sCNsjSc7P5MF6g799bbmAUEv5xYEGBZgSTYnQxZPqeCkneBTLTeNYSKxzbE4pGoXXUriWpF2v",
  "key23": "5idt3isYKZCZFnAcpMmoYod8dqvpc3jdm179JgS5HoqgirwoGHxcgZzukYbQhbdfPwdXg3RVkBU636Pq6iQubrKf",
  "key24": "56gZht14JAxdzaWfgGsJd5fNRiPzxP1amNGP2sfdgfkC6WC1DL52C4U7Tai6BaVhYyWWe6AcH8qpeLs9HQXKgLA2",
  "key25": "3ueR376EaTyymBT9JCixuvYyJgcRek7rQMgKGr6H8wVthYyJHmCdbJTCgkezXWQmKnTFyKMrd8ZMjpHpjMDV58mj",
  "key26": "2T47aYhoNr5R992Vj4FXhpgoxqJBWQ4cWKi2yT76RdwnRS6sphZPoUfPvjiUktq1wy4ynjnZ9G1Ayyub1jGnEHjY",
  "key27": "2behztu8jX1zq9zeY4VFNRNoQo9CSgxhYTyWVP9gWyF2YHtWzhhb9iTnJd2EEXqLUvxyh3FiPZbjypn5FwQo7dAT",
  "key28": "5dFNcdKh3H7UvhCN3UKv8meZT5pLidcbd8tPLoWAsGnBTEdUFc4LXPggPwSKB4oQ1dG5STGniJG4nXk8cTMMet8S",
  "key29": "NL9sib2zTG8hiBXo8mDpgVm6TU4Hs1B3dhST7rKPFChECBYJtepCdn7MozTw91kbRV2eDw71pD4x7ciPununMRj",
  "key30": "efZevfGiFarw4c8pWGYR3mEHLE3QWEx1EsdSYQbx9xoRQih4vAU5DE7k6Jh4JiuGk7SPYyZpFemeArEHgHgzfWp",
  "key31": "4qbG8hEw3KBkJ1rv3xAxiUu9TJfU8N3fqBniCiCK6AqhpTTE5sxG3hRFTrAKUkvUhJD29vK3pLozy592fuj3CbHN",
  "key32": "4nYvgFcnKxRVUCKDRyi4UJBskckjD8hsRsC4o4sNL5KXeviidCCQjCoGLZerJXBSbGvoPCqSaGi2T6LhXK97WJT9",
  "key33": "3NB9VtWbncPXiQo78MaFTeHXMjAXWYsnPFDThzhbGxYnZE3ScwHeNTiaLRKPap6q55EmPUyHtHmHPWXpqivzEwx8",
  "key34": "42uVhy4DFKNn8izp2YDyyRDNvXtBQTaDM5p5FrXWfVas6wAranQdAUmnDQAimGSzegeMWRxHHmRcLA7LQg88YLVd",
  "key35": "3CJ5dpyqeR8xME6X214FYzNEtpZw1Nb3bGG3p6xTpakTHJo9GLG6495CwZA4WXPjDPPxcpgJW6UcvHvbRJx25dvp",
  "key36": "5Vx71p1zxee7rWkX81HWHsGL42QpgkfPv8Vr2ikH8EAoGpJoLH7s7VPo9A3sjkTEfU8u5K4Y1DcCcJWPRLTinqFB",
  "key37": "5xo8MNS5E6eE7gwJ4tNVssDN1KoAh7TuMqaht3j9X4pdf2Gh5Hyg6KZFV3Hn8ioL5QuZeD5dUd5B9gyaUxFThU2x",
  "key38": "4WPZJS6MgVcNfy516Kg3ESgYHfsC116Dywzch6mTumyPLYYQhjcviRQ9EVu64PoMVVb6fM9WY991F8VL5r43hB9E",
  "key39": "5TBnVCCaFNY6qkFr2iEuSJCJwtKqXAVvoQYnpkQCDnN5CSBh419TaQucc3ytAnK3vF9Sm9fLFM2hMRvvLoAG7Q12",
  "key40": "2JedNbGENg1PtjC8V7zktZHtT45uGY79zBLDdXLYuhJCF2yzQ3f8SQvHRmwPRddWn5hPxzkxwrK5Yoa3boCZPozg",
  "key41": "5RAo5uaCrZY9Cfp8WLjGmt6M2iKGnQ2qGjEFYpot2PZkysy5Y6cKi1AwB2HAPJN5VghoUBVAMAXXqRX78tazqbvt",
  "key42": "4GE6iszKtAnqsTkrxv1o1NbwGxpadUetaAmriR5QhRUPwQbNzypxv4gcf52991FY82fD3DEoa4e9jkLvRcRyJbvs"
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
