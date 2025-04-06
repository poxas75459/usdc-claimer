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
    "KZutjAdTSzW9QeiZrvKhvckfow1Z9qhAy4UYNsNA7hxD8W4thUoWx47R1tZcjfQaiCYW5uKYZpcECab5eRTKTp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MT6uj93is8iLsuRAQzymCzXDZ1LaarjDzVtvoUnL9Q8WYnRpykb1tSWagmDMccRWveVDG9n4ZjRWJZEPgnnydDk",
  "key1": "44Xt7bVjW325zDxmQAz6VRFdv4V98oehcvkDWgmv8zAo88spSYaBRGj6H6wpbaAejvxJ7kVkG7qhQTD1cUvpDFL1",
  "key2": "sra3viorCitUR4Cm6K8x2ZdDaEncjCHPPWNjNRW9sDYfZjshhd3f4cxc3q495k9FoektYHcgLTL3SP1Vpg4gK8j",
  "key3": "2DnoRm7eLcJ4EJYN9BD8gdbFw37mvwZkTX1uJDdigC37nTGTnnT8uCcXVRkkrA3uzCrtwQFNoQCCPc3dLDubcGL4",
  "key4": "3NkM2mGBiWwqsp9rvHd7WMEptu9p9RWp9YzGqvq1T33XatbG59XLMhd91W127UQLs9wCDWd1vJgVrpENE2E2H5eE",
  "key5": "34fpsANRy3xmvzpVorQrdvddK6wicU9G946mRKDhCZm8yH8JPQGJRZX2cDHX3FJpMZyRM5jhY7kWSLLrzx5Tg177",
  "key6": "5Zmz2AVomdxb8hnpfwPkVemyeBTxarAmgDJow7EMJ5aUTH2ngpjv6j7pdgNvnezx1FCGnvLmBtjasvhFxZJBAbyP",
  "key7": "2vB56aCfGfxtSjkpw1bHRLeGjzFRpTNeFECgsqTcDqAreShN8gSCiQnnq72Nd9yG2dws4Gqk1LCFaX8qybFe3j4L",
  "key8": "27shzxZroiH1bAi5P9TNEi3rc5bwyVy8BKr4DQhZrs9HwZCLDbbatbzer2u9zUD3JkTKgtsBJCd22bPGyMpf4Tod",
  "key9": "3uQdFrt3cxr98Ca5aSbCdJUAV7aXVeeGfwRCjkA2otowkxKKYmPfh6LziAg2jvcP1dscyy3AjhcprtJqxi1gs3sE",
  "key10": "5CoB5LuS9Kjgrk3MEXg1k7sv5jzzQWTrx2WJ5GewJVdxptYZg73ooRkLFVB4Njgqcb6dqCDgztBJgfctpyG2UgXb",
  "key11": "58CBFtcKmy5gXRhNUSx7es8oH1p5F6kw3qCSpE3gUnzS8AqnN8s9hndyjzygX6JE5e7UXaAfyoPNJuVF55mk5VgL",
  "key12": "5rof8RU4zbtPdoWTtJQ7xbiQSmBuLCquFb8BNSMeAPVDJMnXaZWjrPX2TYKtc8xLWKmi2GxB5iNjNeMVj1MHJy7N",
  "key13": "5oXxeGTLMyYZPUjS3cUM9J11dDeoXhSk6HoCK4HCRazUjmu4CgRN2VuMBeDAvurhQjTDPpmqymEeGfpa7Qbk3URu",
  "key14": "Uv9orw7jcsmyGkvFCCU7GPeZfckQHxKBEm4mamnAFXTUmprqjTuRkvHpxpMMRMLFght69j1x5jR1ea1ebtKKATJ",
  "key15": "62JtF113Vj8sT3Sy2UK6CZM7jAfVSdzCjDvfub7P1994zqGZxk1dyH254EBqVK7rmA8JM99WALbAdnzTkiDYh3oH",
  "key16": "4KSAshnhEHkSx5ctbYx7yFHfNAG3gguyvRp2tCDsTTBxYXKpxCj3DazGDubtBbnCBa1hB6mbbS5AnPfVWZ3hXV2i",
  "key17": "eEHjgyL5G4cUWofoUyzwMBHgDAAxXgzgy63UXuJCQ3ZMKywBKmxruwCRdb2rQ3N22HDnQhANZhhSUK8BoHhjWok",
  "key18": "4TJvM4BCrvbHMpXXq231zmrTanSUNt3t8vjKESynyQcQ32aGo1ZqK3KdCWydQhVVnU7CUtMBsRB1ndVMPuomc8U6",
  "key19": "3my7Ef1WBbS6dugU5AtfdKxHSfoPikRZ96cd8JnXZFFbZxNP5RQUwW11AiacCamJRs2mCEEnHnQjuDu7Yi7B5Z4f",
  "key20": "2h5h3RhoJaM2XaUmVeRCSAg4m9jZ4VbkJW5MaqzAKYQC1husJqZtNv1taB1CPyXcVbjoGhP1RYGyKh1sSXQxszoZ",
  "key21": "qJEQUUUvMtXiLrkmaG5agm68SRfLr4nrhdBqfW8Gy1QtGDTcPE8qJjhPLqtLhDASiEHLLrtqq5VgbZzpmsoaL43",
  "key22": "LgaRMUmQVtUWeQPSd6VCpEuQ9Fhw3SZTX7YFJCDdCCjEZi87iRxraGJePa1RM6EJsLbSa7HfvKSsVbrnzW6kchu",
  "key23": "4i7WqbmGejdMsyti3k37JR1tyRV8SyYvdAZaPBcLAbCuPUGWe1H5pFX2p1Sa1YbJyUS9GBzUCEmUJJBCjbZ3JVp5",
  "key24": "Mj4Zpb73UKBiUytdTCJHrScnAHVEWgS5cZ4AQxUBcXpGMB8M2StMaF3yBhz4o5s69TyQ1hP2ANsvftZS1qZyzgM",
  "key25": "PRWWe45L42D5CeNLpq9fdRJNkRhsWTN3C3777m4j1BBDTFJG3SwxSeeJY4NkknhGqRVvo1hmCQSh4uSbqpqgAK9",
  "key26": "jLQgNLH7wYG7jMNyajHzFwPrc7uEsTGhi5uRVWfYP2nv9gZsh3nDZUZdM4EhEyTwWBC5Bqa9utiGcdJJnj3eau9",
  "key27": "66gudZdebrD3YGJNskC8PCarJ9Z5KNS71ZrHrMRRtNdi88DJ65R3EMVFyrUZNCTYLe6bcBe7DvzMeniNnNujdE68",
  "key28": "4bRfEwiGdetDydvSYfUZHxg1nyqti1GrEiRcoGpU2rsmp8y2hrzQbnxFXDznkFcnBQiNAGcturd5dNMVJ5XXrMRP",
  "key29": "5NCAn2cnJZyrJTxmjAxGvLeEsJF8yPMP3uUQwS8yj27PRhbbSvqwQGrDodV9UjgsemtBbYL4JbxZ7jxhcQnsAAFC",
  "key30": "39naymTSThm8vjXpkLstzg8k439xYhqN7L2AnpYE96TbR2bK4AfowBmWy59nhY6Q2b4bhTWEKCcSAncxeegZnLW4",
  "key31": "5mgiZxtAemTV9XNPSj3aJorXndb6sxxP8UBN6dxFkVFXHpTPyMxTWMiv8HNsD1VToQZje8FmQEqQBDTZRUXvxZA5",
  "key32": "2DTXmabBpwN5v33dgFtzT6EP3rNRazSkeCJs7tmNVKarb3rk8MQPybn59azViSJe9gM3txb15vLDd3UqyWcrC7kq",
  "key33": "2vvpEVsoYMVuRKbrCtTa3uPPfL5B7gVJbWbe5fGQpJsat7NkN3bTqpV59VjruzjZK1NWvyYgSxvoJoa8qyjNGtqk",
  "key34": "3Vkubfz6vdMYdd4PZTLbnTNMbV4m7pA3ujWY1HLPMng1RHGW1B2mUemoYzh5p5cTUwPvakHVShkdmRw9jraNbvnM",
  "key35": "5nwGxC2AjiY8yQDMb8knKb5HXzUufwiWcKxLwx6o4iToo75G4D3BV5NuXgANBLk5L5Q4BwrfBhBqdBJtp79jXEXV",
  "key36": "2j2Zi5KCwcUQeMZJPZSYXgaB8bQx23R3NGuegieFbKD9jfgT4FvXLQ4XDSEEaMrUJ4MzKw1NNe4ZRA7Yrho6iMSV",
  "key37": "3p1aWtnYNiDR2biiLLw4jbRQTkaBHSP2mn9fUPUw6hAwj4QWnwtuKQf89vtUoa7YakYHC5huX8jUQp7V5vVYyFeg",
  "key38": "j8oJf7sLvEj9ErgWTCVLx3WVbAwq4XqkmPEkUh4KQ2Zch1UE1LqxJv6oA48yKPxbMeGkk3b8GxQM2rYxZFwrys4",
  "key39": "3558RBbv28a18fWmcZL9K3bc7JKbYSEAUZHcDKtWnSbHtaB28fyVEPdMPPr9FebmHc6YuEJqDkoTKDWLn2TKPv49",
  "key40": "2XAEk2je2qyEZsP9K9QbbR9zBPHmVTiwNqGBQ2ZKdPeT1jYFNASGiAYQjf79Z5EjVArXHkeprGbBU5cCZ5Rhn7KD",
  "key41": "5TEpV5PpCFdHARXWyGYq3dmNScdjW5swdJYGQEEVMXvAAfndU7vvFQGkRkR84coz2AizeCMWk3oaKPD9rvRgetDz",
  "key42": "tkQ8YL7bVvYmsuFBFThUQx86v4qeZSeXz6H88inX1wALHB8PkppMu9t7FXtx6hd6bNgKDHvLozvZ9KYZaWX5jdm",
  "key43": "2VmnJd8toMhY3MCWZJ76URgZMHqBchrFSoh9WZZkcRw1a5eAaWsbj3dnuCVhrMrUQYfvGNFEWYWKLgBNS3yytZw8",
  "key44": "3uBWEcvTdXFM9Qch6ZTP7mf5YeoYUmsHmAfUvxe7cLezdGgPTSfyyU4CUH4CfuyT3wGcntXPnUTuAozWQ4haouNs",
  "key45": "4V521UHbb7RmFCWBSkEbY4cuq8BbxnX8S1KZDn7Viv2yRY3fZjbDgM2UmJ3fu5rKFdUQ8VFiDkvQEbRvFkBKH4rr",
  "key46": "3LS3uutUtXM29fCuCENoDr49obJAfLiiCBTybrE1Zm7w8McmZPaM2PhEnhCqSrJ318Azpgr1bXL8gR8z3bBeGUV9"
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
