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
    "22NMFa1yjvZhyibMD9hvGwdUn9HXuqsEzxeebzVEkkwvsUDAFhT6pwu6TJRQpsXjXxioYrap3vsb3NwZvo31yvBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5jgymXQ1AwZYYere4t8bxxDiyhQjLAZK8JMuXWt1sKKao6DWAeNUJxsA5Y5xJHX4nd7s1a7oiZySgmYS5AtYhp",
  "key1": "5nvzvQaMYqEEVPixjLhnvvkZpCLtC7MUmrS298tEimRyCk4CKXaDYKCTNa1WU7vhjDw1qpR26dj3rj76J8mUbBiQ",
  "key2": "3gzLXbZGNtzHkpLGaBsf3sqFAJjppKnR9gNKPkzrwKgt911tbEYzMX5sK335vVzd3g61i8iLaxy42WCRbeoR7Qgs",
  "key3": "3Pb3PtAvtTB3gDETA94JyGZKVnan656DfuXYYno52EWN1SKqKCWVPXfgcStnDtvLPhFRrqCAVHpVUbsQ6LfrSqNQ",
  "key4": "62Q6NniaVS5tyehaZPgM2THs45GsWWM3HGnPUkXNst8S5mRHrtBFsTX6XEiiD3sauyzczPLi4ShhZSxcaRNfx241",
  "key5": "2TgsgX6veZ1oBM9FT7DSpYm8szGRuY39Wm29BmghzQ8oVbwG25vKe2Xn4D6rWa7dREAiBzMFxEjCL8Nr8Rez77f",
  "key6": "3e2QhiUe9ixA5nPHW5aMtBgRaWUPLvZzeDyRRjhwk3h8J8ZdHRZnX47Md1PaCqKtsNmPt1J3DBDkPZVcrsPFtFCk",
  "key7": "24RiCxoXoqjW3vMSfFgxhtu5Fce7SztEMKFyeLeT6YvzLNawr6sQ1zahCyTibiRro1NJXVycjWAEx2gGuVzW4CsK",
  "key8": "5w9zUe7pFd1fPBmPsu13A1eh6STPcHgvv2PsogjCjt4779mf5tbHr8FzTDCmzWuASzHWgqeDcryNsGPfDBwvpLpm",
  "key9": "2qQVRsDeC6gk1yjxQgxnpFfWZVq1z7tfdV9F4fD6pBWykjvC3RRBYsXkhhrGx292ifcGxDnGFZvTf4hu2rujHJbT",
  "key10": "33PdMEzX7sKazkCQM13u8tzjNe9oUq8RKJmQaYbVDRS6QQjGtSd3dnEkxMirXDuHgFinPbv4bX3sSV5vW4Q4ddym",
  "key11": "2WS2z5xSVab3keU2gaRqkRDKpNsepbMynNPDY13MiFYHDY9SqizFtJ8Px4rwnDgnZyU44vayU4rE3LpUCaeUvfPZ",
  "key12": "4AAJ6vofYmtiUBtSMw6pNEd1khe33nY8vMk4npuuZCj1QgbhHNhF1DfULCQtmqunHJcbdYFJ6M1THErobWcsntoq",
  "key13": "3AE9wtRuFfa8mZkLsiMa1bUztPfns6Tdk7REChJFU3j15p17kzBXc2SHqRc1AADdwTnLTtXt8zDy9RArJyUXg7w9",
  "key14": "44SSL8XSGjRtSpCBbWBoPg8wtKH32rWnByD52c8azfNEqXVY7n1rFRyDkXXxta2JwrZg6mgWS5kXtg5RMtJ81NWZ",
  "key15": "3Qj99CfichqsnJgiHsyr2S1hphdTLeGwMdPD6uCfiMkbof3oaDiSrqDizaPehA1igHyq83M8yNYSappMJZjGF1Pm",
  "key16": "62ydyrHp42CDAbHcTwNa4cn7FakE7ZKdR6gJTGfoyyhKw5XsTjJcYtSVenwgH8ZRQ6EuJZNyzbSkcCS1MD1ib9aQ",
  "key17": "3N3VN1syb5iC2S8mE9eJp2mzQ5rgLWsqPrRx5j5f1wcKYAxAyXDTFwei7qgwAgVDna5xAnL3tHMoTwPAqazPQ6xw",
  "key18": "vKXbcE3z75Aow6YGpYufuxTjrSoQEpNbLh1RGtYahF5E93jU3AcVx29exRZpUU6jNTtZgPdcLeHrgRJ45heCTkw",
  "key19": "5Fejj24Qxpbij2rrXcVBpjFUA5gUvMScy1zbqYVESJQPvRPTttqgfaDDC82KgngpbHahCGj8UgpndVVuDLCHRXyF",
  "key20": "2pWxVUUdbfjgMCFKdxaK7Nqas7MbiRNRK5XYksuuUTC4G9qcwe6rEJWp2353HTUacVa7vxTHyNc8NMRc8PqjpskS",
  "key21": "4d5DCbsY7nUqM432Cf9Tyathy7M6ibiPBcyAHEqxvv3Yurx298AYQ5pa6qhWeLXExb29DJuwyrv3pceuJRo9dyiq",
  "key22": "5BH7cEmRLJ3zDXdnwXexxBaCzF7cKBMFN4tfLiXQW1rHTM7bECFLqzEroS2tjTB39MNshoxHUFDj3KTHPtrkQfrU",
  "key23": "65aiCmhh6Yft6RPgqHconkMTfN14vtxdVjukiddPBFFg7RFGEpZWkN6R9mgL6vVCGWzhKZwwW84d5tp6dXzQh3MN",
  "key24": "5epFJZZUWNGbLeiVvpiDYRfQVNC2Em86Hj2B32TCi1SaSryXeeaDDz2HezcMhE71F4Q49zK56hFr8aLBHEjgWijJ",
  "key25": "2nwpNj7BRdWNdMMZ2vaKsRc2ahJ3zbcfjPwzc1acG65Wgr6ohSfPMGwsmvZ4vSBMibxRtEATbw3fLTNsRxe4DtoD",
  "key26": "3EeHigZxs7pPgczCRKg5UhgBksZdZYsucgPqjMzm35j7CNEeNyUwxMjhHjbvJaTKHk86ZuaMQENXJxebfTyjavfu",
  "key27": "rGVDwX5swQSmGUHyobbzpmYvB4nFDgJNqtGRhRPRLAbHVvopjmcT7GiNzo3cT9JNomAqWUbo4eNpLbxywuoPVMS",
  "key28": "XUUhnUDAB69cMPxArB4mWAu3xRacoejMS56McxwY3oXqW1ZGLN4rymR13ww1GH8utcdyEFBai7EuKp26VSWVh2p",
  "key29": "2Q7C3VWn4JiBz7YMTmMELYxtGnmpAG2tCTeuaNPCHEXHirQnKJaqbpFgdtGNKcJ4PHaePKHvE496Ca4t41472nbK",
  "key30": "4w88QQPFAcDGanF1PZ1EcVqrM18eKpLXWY49AupDGtBA11d6oJzwEQvo38uwBf3t49AwWX86CRptsJqcNGf87aQA",
  "key31": "385sfXwiCJ2JHkpHP424dzU8fYjPah9Di9PHV7LmSVodhcfGavpwsqHo8WMeknz9JLWTUfn5wGGgs1LHSX8f5PjK",
  "key32": "5BssktFnxqdsS63wxgG6GS434TmDosLUfrZL4LrrQ6K31mZBtHRenhJREMBCszvozTRy2FebZcbUqUNKMk1oupjL"
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
