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
    "289gKn7ZN43y1tSYvJLS4F3Z1QounCgQZd2WsSw6W7otup968XhyctfBCzixwkkYAWXMhDn6AuYrqgvjFep5iNGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VrKHPX4ztzyHRg6n6g4tqX7nsRzuFTsa9ahZe5G8rHZGToVxtyraEjJu42SX5BnFwanUBBZrsvXQuBzHdSDhGjF",
  "key1": "64GQTaQSz6Kf4j9GuKk6jEuGn6UufRtLvY62ygcc56H7fWAT93oHmdU6b9YxQRinC4sGthzbRKn3jKMfEDZ7ANCM",
  "key2": "4U77fg1gM1fKCz44UvhWF8WL2nT6kcn75eDyUyLwmgGJedmK4wdziuuZ8ByWGWdVB3e8oF4UmToXGuH2s8jt7jMq",
  "key3": "5oZ7C9qksBPhw9uoT8uxXV8gMwAL8nSeKVCEo4nZfwgx868s4AiCGuBbjrFWXVKVMSx2QgVsFD721gRznGh57SwM",
  "key4": "4w5p1Rcn9B45Cs9wgLKU1b4KpMhRa43xKRNUSJZW4UtywYjPxeKY2BuAh2VrZodoQsQNtgYdRHWfx355x2mBBG7J",
  "key5": "59aggQxPcHsTGBqjnfENw8UYgHPNZc9bxx4aFxDumzNr3yNgxrPwuYw3DshuBWDDmB4opCoLz6pwEa1pEY1AfAFG",
  "key6": "4UUp8es21MvHLjqQfQViqxwGAgnRu7zTryf1NjEhKH8dA8KH9CPTbFeTFAUTcTXxUs7De9afQdFeC7bjN1dEyb6o",
  "key7": "iY2osTDZyp3yEZKgnViY44trmhrsVZK23x912FERpNq3kB2bM9kae148DnV9edpPbZqKUFv3gQLVSMKP6Fhuc1F",
  "key8": "2KyVR8Bn3sRKw2M3P2MmNU3vz5VvYXaMcH5KxeXbfW22PZt8fyHFM7JWguLYovvt3vp2eraovgzNVyvpkgbmPd9D",
  "key9": "3F6GdxAo8JxuJfNkq9WiL7sJkcESWiVdWZ5pNLNLnaiSsnabShCkKqs4hFShhXWyCwKekvATeCn7Zcb9wPoLsWha",
  "key10": "5QMTQx6SSzUApVEZZdTPiQvhbeQVTky6hDdfWCh1JHwdZGysWFtA9ECtA2QAX3yw8TE2stnQbQxd1y2Yx3eKw7Jr",
  "key11": "31Yr8bqp6jvZqtHJYt5W5tQDyZENfRp8knskPPPFQzY52rENFhVJCLbti9wagpCkSFSMTSiY5A3G6VxiyJ7EXV2J",
  "key12": "348V9SPTnZKqkh2LcqPNWXtwpa52GFdv6fxWnkT5eHYZWPHJLqnfycdvrG3DzkRPaKHF1M356YfTRAe1RzqXfxqk",
  "key13": "3khU7jEXXMPhNcPHgYEW6Dt9TxUK59DYG4N7sm35PTUrPAjWRcWPTiJon8cpHcHeYfRvj9jR2yRPAwjJqKNoNCAx",
  "key14": "4G5d7iFvm82zASidh5SAYsTKhUzTsvnpjNyrkkv8UaM8sj79XFEjrFPrkNhwFW6S2fDUXt4u7PFLD6PjVG5EPgK",
  "key15": "J2b7RaWf58xgXkTLt6Q88HUftDDNkYS5CPhtTaKC68JFvRMkhTqbqnteX8EMZX5Y2foEdHDDUSJ72zxjZSf6xwE",
  "key16": "2FK26SpsP5R7iam2kXDsmRxxB6LXbcShiqnZV5qbZ8fZJAPxzJvYXY3v5ayHULtj8Ju2p2VuqgeC76zBxvGWeUuu",
  "key17": "nrW6k4ujfT8TusfGqYNMRp1ewJNeqB997QF9enaNXCSk8vwMj11FSkkMaDkZqja3g9Fg6LzV2hXFHdsicHj73vm",
  "key18": "3QGPToWLPHPC4yJLngnyM1hMaHnj7pMMWXU4T7chWKyB5BCGK1NQT2VL8ydoHg98CFi2LabXUS9ZmhM66NG3BDf8",
  "key19": "3Fq1d3ZqNzpS75bpWJdWAAA9rYZw4uwjBmS3VGTnRQTTFshp99Z4H8XpZtj8SUEJFVxDxjC98XaayVLFaowtAUR8",
  "key20": "2X6PrViyeXkHAVTWEuaaiRbVB643qoaz7K4iGj23KvDNiJ7JhrX6QsZpG27E1QGAH4zQqcjM5cLorF4tWgsdZ6uu",
  "key21": "2uAcrA49hK9oBuzWdGcWriQ6owtKoAZdHyA5vx1eqAHUFY7dwMSxayxzsC36tHYysaBbZXZ4r7jWQPeCbYmMyzRb",
  "key22": "R8ni2TaDq73wBXKc5ZocYoeYZByA9KZ3hkL5Gz27mQGnhQnt36tbwENGx5HQxN3da4Ve3Vgy4umpPPhoqgBdNe6",
  "key23": "2pfHwxwkWDAietY6Atsfn5LXaQ4GYtDttSD2KfZKofGaHjtcHbW6CnxzkK2934USp1RLuFjvBe1Uyqhee5LkLumL",
  "key24": "42idhVG89c4ArnwAD2XmJoCe1QW2q2W3LJyQ22SEFyLeLoHdfQ5jCgJa1NRu2UKv8UVWJ7zZXCCETudHqzPFqMj2",
  "key25": "4ABetkiH7TXZJLpXG2HjkjJTpvTQAB1iayLqhzXg94dDLiNwPmjAS6Pna2cMVeo9CJcGdtBG2eQEQjV3ktieWfiU",
  "key26": "3tvRwtxwkFjnujCVuqJidf9pTXz9qFtjsgAUfERnVVFmyaTaR1FbwaWzYQi3DYKTyxWJJHf5d8SZjxuLqP3hbCud",
  "key27": "2hqUR6xgHWv3AotFHqxu2QtiMy5Kvmou1LrYjfkk3RUBKfaLZkRXizV7Ympt4LEEFsgeA5n6XN5hmZNdFYubg94C",
  "key28": "651691MZLhc2eEcS5gjhxegnPkzEPKQUtrvGpgH5E9xNDk8jvRMeCQBnoH2kE9zUpG52LSJiyNGEZhB1Pow3mEfS",
  "key29": "4ReRnMzpuF7hNvcSYpRzY5Lt4NSpRZFXsxZx8ru7orjnwdp96JjMXGMjMi4PH2dNBJtTqjHQFPCxqipuiorJXGFV",
  "key30": "Kwxz7nfWMwnvVQNgYtJD4Md3hciawjKkEAY9KKbV5pwAJnkXBQiSuoBf6kj4dkAz7YJp1W7FeZZDE15WRygAsqb",
  "key31": "2YMA4vCWHNJQCqMyA1Cr4mdepqPTCU9ZTiWbsVhXpdwU2XYWp9iiWUykLz4SYnfpEZwcqJPA6df7YWAMNtmb5ent",
  "key32": "5WtM7pX6dbrTd3Xcv9HG8eKuq9SAjxQ7CUUHQdTQkcPDTbc1hQB1fFi4tJh2ckX585WJQuVSigatNVppgViQBkjU",
  "key33": "4KXrcwAgm3FQUdAT9MRpmtdhC17Cf4ZUgz6v4hugyG1k43XgrDvmCQ8BzoYYvoR2ryrzDZYULjYqrW2U2bogp4pb",
  "key34": "F3YY266E6U78B5duJqoVkRYzzhSJg9BywK6hToj2R7fmz5ibuEU9kD8PCn3LtUkePxBnrsSFDpUPF1fH1L2W2DB",
  "key35": "4Lssqzd1XWViPWKsY6MtD6tKMZURy1UvL5ziFPTujb4KvkX7X2BNfHKWp6FKwXeeA4UdMoScst62tGaem8iaPevg",
  "key36": "PxUircNCxCrfz4fQ7xsK2RkNBEy7w2xR3T6vGDMu1xXNGKmnQTtSBnsC6yGEijAEJ3UizK6iHtC3E4NmyQEUaJD"
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
