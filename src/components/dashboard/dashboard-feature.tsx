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
    "4L1VjuvyfYN4EcL18DkwEdD8fVzZgukUUJbrtsGUmdkJhwMfi2LzTG8HNumf6K3uh7W1Cu9PT5GwYddQ7JR1awW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYZY965uk8ymbH7mVRH2qx25JHbHRZzNpcmbJv7BvknRcEoRekcDizrqjyKEmbhvsgBjZd93rTQov3YY551oUGu",
  "key1": "59h1fNZwoKuhpRmY8kX1cUieQLhKJTGYj2HWj4doYF51yyvSxNN8CYDGnhZT2u9o6YwJgPDHjMo7E4NPsS5XjDMn",
  "key2": "4rSg5v5mGnUy8jtRNVsUQhvhZtYPcNNSvNfP3XMAUkQfqoA1R8Re7JxnqER78YMBNBvWefCaChStk86UDYmCwUQC",
  "key3": "2z3TuTb5Q8uVh3XGz7tnTBeJ22BkbG4AdNYgihMyiHdn7mUXr9jpjgroh5MNnSkeyEqGASFnCUEiiEnwimNjvEim",
  "key4": "61CSHUuJ1A3Y6DwccUq7ScqcWbsEF9et4qo7TYmWi7Pu1FvBsg3221ZC9WHUGXJwYGimfh7NxFvL8gb18WQDDw4b",
  "key5": "5yEBSszkYJRvv6G8qqNUNvzcXLHacL9upmWZ9vcyx4vgAQmpK3732EVyKSHGJyYeFnuNb34d6R2VXC1oX7aT7833",
  "key6": "UnGGcs9kGhYRkTx8296uT5T8REMADpp3WasxT9W49emzJNNnCNAx56nuKgWQ87VKfc36DXHutjzHZXFxdvPRyR8",
  "key7": "3cEDQPJUHubK2Vr5hv13g21S3DPczxQqwDVJG1E2MLLS6z2JvLzneNX57xf38zdJkedKqqHX4aZukFXtUmKzj4Dp",
  "key8": "5cfMoZQ6kMkJJVygwXjCUKdfwEBFTvuf2BKdR5vk8mDPHj14eHPS9JaEMCpDbpbx5db2ExcVZ6HLMem8tgdLhe1J",
  "key9": "3qZSs2mLGLVHwYDMTmUeauGEd3dF8zabndnGAr9kq4dVNsRvTahtEkNq3Er35HVfj8w2NtpCPfi95WTvPYp2hzVV",
  "key10": "24FxESYhxpAxSghWbzmS2w9W7doBrHxstj7FnwjJHA5TMsih5BQ3qiEUgfHyoBEpY193PM1mZfCPP9RGwNXTAaJp",
  "key11": "3fqFeXFpuYTqLCQdoC7yWJEAEUReiLD2jMyvBmeyQbMn3JDKJyka14of92LAxJnvHGKqCA2C1g6TrUFtrH8wp2Mw",
  "key12": "4u1C41nnEPoFispWZS79Rc5zaBAP7MeF2SzuXDvisXQgofX9AbAchiirRaRi8sGLyyi3h3RWrww4pvdB5d5u2wGL",
  "key13": "38Acb2SS2QfATn7xsbovrBUHBLnAS7VnNvthjhCCsJCAHTWNNHkuiTDLih2UKFUyFFQpokMHLtceTEVee6uF94AQ",
  "key14": "Bo8Q5ZxKfjsp1EqH97RvNsQYwv5oAGXBg9A9zGtNgWATh1U3MHNmovhsMzX8U16j5YrdHLR5P9mAiCtn95uiVwV",
  "key15": "3n3WipPYqG5xK85o3jDDAwExvgruqYGZXZ2JJecj23DqF898Z9yMKNm7iU2N74Wrx6p59KisA42Bofn94xxeHz5n",
  "key16": "moHtnfk9ps9HmL8syAFjWjVhrzqCFrcgud6AD6XmX9HSsFJ2pTYQEVEtF736wd7Vxb18VqR4UMg6bftww8xP8FK",
  "key17": "4iV8iisuwBtcq79qtp7rwUUe5ksKVW6tzubXpuaYA3vSmLstv4B4ox3MQMZxNAupuvVRxExZPZVrtCbVXV5HpjAA",
  "key18": "4g9o4AkmKNQREz83s7dUmCmdUEAuYySR6FA8aFdk4HpWXGnFtREVAcxAM8vrWZ3niWgQvYH5Aj2GERdHTMm3WWAF",
  "key19": "4v5SKxafRcY23Fdc7bU1emGsT45JJS8MiqufMip9YLFLi29ASvBWUmAXEG1j1CdeENtGD7wv16Y4vMkfT5Xkq3vD",
  "key20": "2mkAPYZ4f23pcrxi2Q4myWp2bjfRkuZrcqv9TVmMru8YKsGMSf4Up7ZdSA9Z26R4NiBdKVpfcXZotmNQ5wp2mzt2",
  "key21": "RAMpdxg4Wg3vJWLhZYfGfveJf3otZG7L7ZU3L196yKQqV2Qj38DkHoHMWK7y2Ffhkb25nTSZcAqjBTQqMCdnQbM",
  "key22": "56z8LUAvkGK1mbnHYMdv4qHPM6Bb2KC9xBqGtE5PofneadLbrXApGmZbJfGR7NFVNeZB95u9hz5tgAbYPQdcvEqq",
  "key23": "2baer6BcWd2s9pwc9K2x5JbxL5kW1ytoxxi8pavsnAqkMePaCAvLdg9zi1kwncrsHm41buJnYMpV6xLhs2hrpGmf",
  "key24": "2SboFcGzxXSicXLMZxYuVGtfdbnBzzhyh1KbmL3BPpFboZFLEZK1sPa9vb1udHRTb4YvkQ65QAPBux749RSDRmNv",
  "key25": "KowFZRWEMfj89ih6LtiVpEBGvXp4YpFpYDA614YSzTbRunWeApKTNkCyKVjXXdLUESQ4ehKguvJzyoVPRz18cBN",
  "key26": "7MkRvqWcuchLiPxYUYTHsHEJWbEJtVk1bNx3VqAQPizxpnzkJWBhHK184tu7erPVvi3HBcejcbzU17FYmzwAf2d",
  "key27": "56AgEofvLicamwaxZrorUjgWpHdugXGoB1KycRQL83WUJc2p3KkAYaPGmBWaTfkEZB1Sm7tGVxfiUHxpAqJMMFjq",
  "key28": "2EkBe1zfYBmw8abSbWzexRoBmckiSnhH1VDxxu36Jwq8eNGp6SK6x7JRSRbJi1ZEGYrX2abF5ZQtLz3gApeNmusP",
  "key29": "4jKEwRMcjrYiLdmsLDEtLPVnqkLLDXiiSA8zVp6cnFCNfXLLsHyUNjTCuf5VZ2YmZGucrRVq9CnbZ5xVwEmyUmj8",
  "key30": "4tWjuWbAP6yUVqPotobZ6cauuyffXUmaWzfqhK9tTu95URUTnU1pFN6xBh7NmSDZKh6bXkeQ16qBBpH3KeqsQa9s"
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
