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
    "Yd2d6En9QS4jX33PBpiMCqrZ9Ezpkaprrh7XiXV98mFKytziyNgGHZbPyb3S7ppTD7b9ExhYnjSf6rb7xyfLPc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rqg8tAR2DvuvQSHFqs7ecWQrbZLDmqqvmq6ta9HqFtLrPhLBCMtxgwxpXksszvy7zjfEHe99ZB464rP76beipDb",
  "key1": "5QCd3jiyHwmkQgJiqQMqtyyLchbdjwVAHQa79uHUeyWtqRdGaaA6FBYRYqJnAdrGorKnakkzuw3wFTZMAigNDm3Y",
  "key2": "5ErpjccAJSviUgUAn1QmK4vcUXH5tEqh4213wKpgbRW5aF7HJEQSpckYehcLhENDSn9aecv1Thb65xiSpVxDFDG2",
  "key3": "35cLNGZXiTm2XainPEJjwjxfxBt6Y2nNkti3PcayFmsA8q3Cf1EiyL6CiuMZmYtJpEnZCmUoc9ddk1xU41RiJMJi",
  "key4": "2CHdNZNyaWRQfzwi2LtnHpvBgD1ZhcyZG8KbKoLVkqGsf4VPReEwnTgE3gk3FncYzmQqgpJeJmoGZYD2ZAyQn2AU",
  "key5": "3yTRyopDvd3WqkFQaDeKkbbnA5xhsFtkDuzi42H7PYVXSmx1s84zp6soqBps3767zMWYoiUbKnkC6fGVKZr58qsX",
  "key6": "4Dk9H9kHzaG8G4G4g6RHf7MgYRcdXLtbyFddyVqtK1EQx7fwhKkGR1kx2431US3cMqczejzQWJY74f75GM1CUeki",
  "key7": "4AT9MNrZBRVJu2UjtuGTvxCrj7vcVc6KSNETbH5s1TJbx2gnNhs3vX16pEUpJZr9xhNfBKPtkQSfXxPvxBToPvmh",
  "key8": "5UtSim6ammPrtzZBNCAJEN4Emv13hoT6R2AphKW4zbgr8Ay7dgKBvWDAcUDTUV1VNo2hBs51kwoEd1BrKuYwskLa",
  "key9": "39J6idUu9Gvk2w1FpHsV4Jejb31p65TwmkzTgmg3zNMV1VgTm1W1gBSgdv594dtobMV2eMHCay3XCPvjovLhAvEm",
  "key10": "2DHTocGmfZu7DBtTH1qUWK5bi9yD4CbjxgwxhZbJCb7vPkx4Z6Kvrpj3fkshzF3xNo2NENdPKxpWTWLWyYi5EGdW",
  "key11": "4C5EgyQSxPMEhdX61kjxtx7hFPF4nufDxCScExehuC3HLVXgUXrb8VpLneRTbzsvfcZGdHHTjm1ocS5hpgRFjEVG",
  "key12": "2LQARj16MqwtKvgRxKEJRCCUWFGRTpffQTDcftSrkQGmBeA9Phfx9gKBkVq4GDJPY94AxyS7Gb3dyR1ysPqRvyw1",
  "key13": "5oyY7mHzrmrJnYo7AFY8NpFrfeGjUrMRKxxJsajJkMg3zvtRc37d9abfF7tr9y1AV8TQBzMz1Zi9rT7oTQMrQptf",
  "key14": "cVN9sfe822mBk9cE2swuK4UX1Y3H2ZYaSqB7CjNZu8UPmWaJrq2jYpbkegHvFVS5Dxf5hDwuGrMoe6azun2wcVb",
  "key15": "R5BCqz9GyyR4AFrj3orbDcBvALM2KH5uLiDHUfWcYVV4VAoP5fLjrw1zRjTrVDKHCMBw5cSNBkPEwUfsuX7QKmG",
  "key16": "1f9J4kkvKS4DFYUrKEHjEcMWSZo7WStNH5niArSE1qdPEvCc7xG5c3YuGVhYt5Fyosr9phPH8sgV24U8GpD9yWv",
  "key17": "38DF7m4efkqSSkAGvtZtq51Pr6XzfiH5fsDDqWdvyxNaTmmeMqbiayrmbN47M8zE6dgPgtAcgNwd8KxS9Yhrr4Bz",
  "key18": "ZC7pKcqkD5CcsHsBgfqwFrRuV1ZC5Cwxfas313nPN26ibx4fQosHjk3EChzTTxporDZVfzbsBuXWceDucLeDNLb",
  "key19": "32dgW421NRYBr3Y47ACh5Y84dfQpQebT7jA3vASpzMvq64rhFwQypFLoftMUexXToaj5YBWu64opiqpyHHHYJRCf",
  "key20": "67eVNjTGqG8E2PJjhRkqeEzigCCkpReRSWYPJc9pKuzECSLPT9YA67r3qM4SBEUJkdjPMrUAn2iacpUpgP63hUZi",
  "key21": "3De8YwREfkJ2B6uCuhuaTnSBxsBpAV8eiAdY7kh63e8E6HZWbfAXDjSB8dDj6Y5fF9U9yJ9AVSWU7au7p1gLyQUd",
  "key22": "59FLokgeiVn6daPBuvStzSqyqPN43C3tVc7rNnSz4xHPPiepFj5ojieDHC8XeafjrY9M53mZoPYGRpeqhWjkBcvG",
  "key23": "9dqCm4Tr7hqbLKZRGhHjT38ZwhypSMeeKRHQkqiqkQyWP6ViMMDBYJGStLbCdv5Vj5WNMDAbDd8upT1LtJ49Qwx",
  "key24": "5yjYxcogzM6i2TAAmNHmRdbFEqY43Wbf272jnhHQxSNdZRkZr2FsYjpykwpJnWKiC5nox1QAP8gtZXbjAf9RQzTR",
  "key25": "56Ds8XY2gs8RgEeqCJo1jhWoZsb5UFuvqvgpVQqfrr6b7veQf8vkZDXwvYwBg44BZiuZQLPQhycSQAQbLSPKXqJf",
  "key26": "2k5pgBh59B9mT2poTndPfpeWyu8WS1jZeAurwCjtdhvBfe8BpFFcPfXmPUbHzCCevNDPg8DHAeua6WXLvmVs83g3",
  "key27": "3adYMBsZp6JmpeiKtrYPtJzpSCLshZU89zuzaHawuyfvihHX54xS2smhmuXrjywBEBbA7oGnJCw6DWzgUnFqvYKq",
  "key28": "4aiWvxYGMuSLPLdsZnF5u4o82oTAJBVpp3RdM4hzMtZz9ajXhG8hghcYViu4SHLZ96QggvUAEXzZEEnPUj3f2kaM",
  "key29": "2w5JTQJV8tsey3U4nKziJAwFVLAfpQESuQBvDGU7hqKLHPbBGdr2rVPm9KfXmZBToF2Meh7b7HJtsuFVKvSQm4vR",
  "key30": "5XXWnusqk9iJuoeAYqYWhr2Lm2Sho6cU8tKDic4crZxFjRzzcHMBMsTvjxtFDzUmKBZw4Arj7KwJKa2ukpxJhLC9",
  "key31": "2YGNmQc6ZpekQLAZEgiayQeVaTdd8Ra6JHRvT5tgJTzNsHbKX474aLof3TMtHMLjii35w7Rv6MzBXBg57RPd1sQ8",
  "key32": "5kt88EcB6ogEWwxUJDY2SVzseLaVDYo8uAt3nPiywzb83EVZhnFJEvqLiQ2LLoqRDPXi4LfGNqFeDeaB9muNnZud",
  "key33": "ZqGAHEFQxJbqq5YQKewdMfBCwSzR61e2vSvGTHeRPJg6ZH9Co5PEsku5GWjqZSiRDiezw9UCyeTp9xj42jQppwn",
  "key34": "5gN5oUtYxykFybCYVC6e4mmQv9CeFaXkPAfYUN1BPFgyujE96SvYydjPmgkWkJ7qHXk9zZKh4ZtBDpMcc3338fG1",
  "key35": "5tXA8piP2nddYiqMFGWBZRmWZ57Ri7izv3zoq2zMHz2h17uGFp6XckktWtkrwPybuBxCHkfcvEbh69RZoYmBUHMH",
  "key36": "35xe25mhBWDapi9caddqwHwgcrqxL1JD4wnyGoEYvJRx42Rwa8VXZPdkWzAQugkNsYT3gZCh7zMg7ArDSvDZAuL9",
  "key37": "62CnMcz5brawSH4Q3J4noSCrmKfqazu8g46YAve2qe76GmwHZ6Sd6x3FmonxtNDEsYkBftgMDWHwR22fyh2SoEAY",
  "key38": "5s68dHkShjX2Jx1Xr5hR9CbdyiwWeGmiYH7eFWidTrQNfDCDSJEjoZswjtoxLsz2Th5geB5dYdfxMr4tKf865rSm",
  "key39": "4AFoJgkbHBuBZjswLafdtDe6MUr2iS4jYJvkGNg1Ya8brN1dGVR4amktKZF4BNdtPPf9QvJ1A3dqhQ1Dtn47Y3bW",
  "key40": "4rm4wxx5nmFqCGR3dA4DYC4sPNnhqmRAVzheZc4wp1y6BnAa4XFShdPWEF42efsNP1e6gmqTsWUeewosQub9Fhno",
  "key41": "3SzBrQpJw9N3A4G4pEidXuD3Ge8VgvSLVTPVhYHiNDPyNdUksvYeFqQXFXHPGooKVe2WvCYpiLdKoqeiPDyV7TnH",
  "key42": "k4ie5tUH92QJ7rj7frffxZWQpVoEWUTzY8q8YFdEXhuw527PmjyGcFthTeyA7vbyLpNzznsCSW3HmddpZxxDf7z"
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
