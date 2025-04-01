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
    "5bdz5UjErsRDdyc1c38ayZDt6f3EUYrg1VwyCUAmrABPfagYg82YdV2MEKahXYqwZW3xcdKztw1BMpbB3mjstJ2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Som1vdSAkN3qSV9r2BEFTiuGpiLQUnjQkFyUu1PgAwQzaoRnCVMLq6S3mfRuyoA7nCYyPW2H5Rtv1GAv3wSGffp",
  "key1": "4YYHEMcxxqmybX2ff4RzYVDS6Xu9eSnwV2bbwqDTtgPmu4c1AhEmbvLB1g9fYizCm44Zm7c24cGHJcBVAFj2b57k",
  "key2": "3YeA83KCyk9a1SUr6Hy6zeUcjzjkvaLD9snd1V6k5sD52Zi4D2HXTdFRJLFVqVsuxmDHNy2YJcBNKhU57mFJ9qJK",
  "key3": "H8jHX1VcNzAJ9Kxs1jaWcvYjUxYkK4Ah5NJiZ4v1wS3WG8HbhXui4jpgZKU9GL6EgwoWLCtjcRMYA4mm5pTTTQH",
  "key4": "DFxTkFsd3gog15Tj8ERKtZCuRsZFz9pwGkCQEWyg9KRH9ijhWwMyqPbRBzAzQAeMhfbcT5DsqQgpwXM9kZTGyF8",
  "key5": "4Ma32RL5MEFgFQFDv3G89o3JnpE6w7JQxTk4z46ykqv7otC5vqMR2K3fXJ8qDKtfwg8uQ87RFcpomL4F1eEwdJu7",
  "key6": "XCT6sTdScJxvLKBfqUomv1LJGvPX5CzA1ZVGDL7mXFuszPHAMszdiDndZQW28G1eiDUdEUaKPajR7d7NiAE7cDw",
  "key7": "dxurMBYJGrQ6VVfiohuoZuKfUkad17wjqxPwJVfgbQiKfKH95pQWLybiajnrP1aH4ZrggD3NSpThoAN4BtuSPvW",
  "key8": "4UESyGz2N2gAuV4eJ1PSaQLR3p9jEpjyk3e3RikK745EhVj4S7QcAdpAhkJLF74m4xsyYYvhHiCd3GgfCRuFTsxC",
  "key9": "5X16jsawDnYvwEaqufw9Rnrybv2wNXH8Nvyv4iUzrzKwACg4RDk7GyLqF3bK1kJ7G8xGzPLD35s7HbqoLr7mijnt",
  "key10": "3AuanjrH7rFtrDUFXj2cYC34ZCHCbbK4drgYBiZxVR5PqKH2FursQrHrShvso3hWR85SKSCMFtFpRAQmf9dX5paC",
  "key11": "5SY9v5z37xz2W5BytmNF75pcXCkuR1UqJ9gPHajdq6w7KWvxWJTFWo47NRDmeXjKmFTsjwau93B2uu6C5ucvyVBw",
  "key12": "dKFLG9EPr8GtsWhWib4kewcUB9ceG8x1xDSiAvGTnMva3QJ8o6DQTxJZpvBeCNY8ShapsD3UiX2SgSkhkhCXLvi",
  "key13": "FzBt85o559nX9eW4SQ9tpDYBMXFcENDAc4BuvHrYEYXF2pvzS8hDudUnj99Qo7FSDB46cqrNH7XrxKpJ71CqYzp",
  "key14": "28gDDprDDK6gsUnGyT41DYFEsiMELxaKbJtyXYSsPBuDki4iKcKe9vzVjYiHDMr3NhSTqswVs8kHS1Ab1xqVzYmv",
  "key15": "3AcvxkjNAZF24zvCX3k5EBHTcNtZ1Wfo9MeyXEFrCQudhevxQ6wTtoLQbhjytoorfsPWhvNhPnATYTnWBZtEgbcT",
  "key16": "4eR6ACKirWkX3KTdG2YHpFJG8WoYoq9v5q8afYEJcwpkptVFLK4pd7civYLKmwK3k3jVNmQsjn6a7N8vwTaJuoRE",
  "key17": "2GLnh4TY2kLr6zAPqF616oXwX2mNzJLiUn2oBqGPkfnjD5kVsaHtv9qA1TYXC87TMspMrQ53FWUphWCdZ4g1iwqi",
  "key18": "5MtZpRrQLmvtFebrkCVKWQrSk65CskGxcMtUEbU3CDaLVC9RDtQgBnCGNwrFLaT8tgVn43F3aDuu5kEDZdU8bYrN",
  "key19": "5SfP2XPwJf3KLwrktebQ1APyV9uK4NVYiaiKC8riJCBbRFxZQ7ft1mF2zNqg1g5CVUGAcjW4fPqvT1QFC2avZEqg",
  "key20": "5E34X2cNiknbqnnVFLdQtkpUu9M4PZ4j3eA4yNeWdN8mwqeJ34kQWELNmPsRzxZQmVfPpZMdG3mmt6Y4ovFSumjk",
  "key21": "2P4pCszq6bejBGh8cFoDMj35pfkxekW734cXGqeUbytECwsVcViMfEh4h2gwDsZJqt7dX7ye6NqmXXmKrSg6F4Wk",
  "key22": "hExVGG7PjgMsB6hV78kBSirSPeyFFoBVgew3qTYKYajNmKn6d1UD9Hy5SSPDUu58ayPPpHQYWdmNkDHtfBV25tj",
  "key23": "qoJHLLDdHxmEdtKY1p8ErMo8p9GxXEHLSrvFnXnRyRYC1CX5NC13yvGQByz44kAp4Gg9xYnKNxXHkCggCLdEsGx",
  "key24": "3cJftMd48ZRv1UDs8HVFASSZnh9va1P6Jx5NKrXGQWadz4Q5ZfNKpjAxbY4pTmxSbPXPbK4ff9TyTZqsazYgjfeq",
  "key25": "47iCtdwZDZXq56qGyzCaYMBpXq5z48FXP5Tc2gwhRDjkCip7pTVw3oje7HHgZRehyKK4DMsutysRWCkDvKiEeqNk",
  "key26": "3zVA568Bc9nJu99aw7ebD2CePhBTk5GvYNRN69nytgDBQyzymsdikCtREMkBRj6qhxcug83VwqxPaGE8hdHuVHmr",
  "key27": "4CVZ78F7ZyMDPAzJ1G34vmLxhrW4FnLZWtKjvtH5o45apWkm2ytXRgB2HYjmR4Rekpms3Q7Nrbj3sz7h3NannEip",
  "key28": "39R8DR1SCFLpC5WHNh6xNe6Uec2aTPtF1ZP2ZvD5zj8MKvhQDzjs8EMjkPZnNgzwHxX8C6D6erWPzgYJJw4cSjMT",
  "key29": "jgHSZYtPevHnFy3F1kKBGhUDjTwpEcbc9QfJnc4uA9CQ1KjcR28mpVwiLBdxr1tLaq2vTg4Muf7R8aaCmHkcqEf",
  "key30": "ZVd8DPP7wMEamChsUG8R2ebNJ8BLRdQpj6C4NPKqmoTTSPr65VfKaND86zwq6kGjbBdxM8UiUQruwZaADzQzbQb",
  "key31": "2tyt71sTkbHgDz3qzPXh1Nnup529FZBn6sFvbQV5dpjTh4dw2NQdyRA7ZnNBSC6Kwu99qG9TMXP4AY9DQAkrGiKB",
  "key32": "599xBwKZjRcfTfAYz23yvXw3rQ2fv7PFKNCcABkjczEva5NN7s2vzcsRHD41poebAFUNMe6fivWt5WQotVmZUpXe",
  "key33": "4jsjTg5Y7XGa8LYHRxYZaSQjF9cna6EEB8jkv9MRdCasRs1HPTtkGnd9Z3KKbgQ8P5ieDMhWT1xZAXc7msKpgCTp",
  "key34": "5rm2ZuWSoTNgNwCMTWYb4zLn23ngEFMkBgMjorGP4szLwnH1SqVkvVn3hj43z92EapBih6UD2s6XtvH6kfzHrdV9",
  "key35": "5eb4wv81RajavzKSnUhrfgVrH9LLKYkNHUJWa3b1g5eELnFpbokjXCeCrH1gSdoRuWo1Hf9EwRBEW1Exc7qVneVv",
  "key36": "5ZDuFG6v2HGb3Cacwcx3VANbZowAN9QaHAFLBk2nvu4noSRS4bsWQe5gdJUvTRX9UPVZwADxW6P9DffPGAurc3H2",
  "key37": "4aYSyJKW9sQ3RDs71e6t4y4LdSmNJKFFMziVp3DRsjVn2AhYsGpduVYtw3WEY777stJ1QzNVJrM77FwmjNx6mYQC",
  "key38": "548zLvsnHQqMj8evLHjqmEbj1YFYQvRSijZX7GJejChLzJfD8NhHdzbamSdc2CnzjzteY9zfMYDQ6jMeTqKpzsww",
  "key39": "5go9D1y2dgxpXMeWnJKDFznHj1MvDQwjwdAV5GQm4CWaj86KHTJ4qXK5H6aiD9pYD379iuqrvZsdCmyK4cF5qP4X",
  "key40": "3XtHHR48hYgdMxeGHS77EwCwhL8sr9hx6MYH21b7He57xzWMUM39yybyY5DXg5k5fohk5bxYbUq3P4dXt37LmPzi"
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
