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
    "3TvPYPpYRbLcZ6vj85dKAmCThm9LH7Kimnf3GdrjPNcRFtzPTNVJWQZ35TJ5D78swYxiWKu4VcjscrbvLdzSk3tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UEhGzz5hjmnxv8grmN8P5Qkbo9w7jo3denM333ESREJ9bB1TUGD94Kb17BWtigdShRrroLoJggum9xhogVHD5nr",
  "key1": "2tZsdNsR5t5WJyA7Aj4urKPRTdh1Ndauy3YumRc4afu37fZmiS4QVWWwweeAxY163gfrBPNq4noc2MdbVk3fVEDd",
  "key2": "3RRicvUkdNZhDouvg744Z9s5foF51KtVCbZh8vH3Sq6qwfof2LBJgzGsHbfFZJ8hGEhLYsWhZ1imkwx3sEg4HUGE",
  "key3": "54EMbCk6r6UxUM5XE1Ba4PMZK9XXs1JgTgvj973MH68mhC7VWWwZcm1onYJWHULtWw3w8ZGXmJd1nFaaq6LnvfVo",
  "key4": "57M8xxSxTcRn3MDLJmyGGWo4gZWh2wAaPDFpMkSYoJB3FXZz4LQ3wyqwtk7MU5x9YWL6CXBs7FJvV2QNu14eHeDw",
  "key5": "3EsgDaxiC6jo6WRjFiVpugo9JVWhaM3qtrHQzZxwg1PBUEzi2oxmjZZYAYLxbVfWDr6x7QZyHDDsTD73fRZGkzhj",
  "key6": "PWVPoRYf9tHM1S4SPv26FNq4TnwyKewuH6q6ZtkZqy5gfWavykRGntNAMpzgjsNbzNxBoytRw29GF8gj3fUuBmQ",
  "key7": "3qCTpNbJGm8k4sJGLEoiin3n3N4Pr4E87LQQfLVD2h2k9hB6HGoXZ9xgshyspJEv2Mxzs5jpEiSQdiTiESeWFno9",
  "key8": "5cFXCXtsxKUnzmvnjbL8WQCziwoKxL7UMtjZo3VgJP51YtXTDSUCEt33JE3fME17PnTq1zecg5ahU3Tma6qvZr3K",
  "key9": "3jDQVCRxmRzK6EoLxHAK8X1Z7PvF3pEswB4UWqrYrb5egGkYVNAkABR7x8wkRzyG69nBa7JwG23brCd1AC87iFQT",
  "key10": "5CTrUaNvYukbGwJS5r6aZQSq5SANQuAXsGiHGGWnRgKqW3QEv7mxW8MFgBbYX4vPtQDSauAVBasXNkmAnR6yEf8b",
  "key11": "4pLZRnBwLKopa8SvQ17zUtFXVUwQjfc5wwednCxvFqqLVdXmeXPpiGYMfBtNCpq1u9Pcpn8s6WpeXZVUXAbVVweA",
  "key12": "2Cw5hDgQhCBQ3GjT2Z7b7LLNoavUNbogJaVoStWE6RWx8RBTj8mP2kMjYxxxGhm1up64HvQ4rvSt7GrEqau9qMJr",
  "key13": "3bBP4XtjRxLdHyncs2ketBdUjYM7DGynjprkXAuh4ArVQPSwfreJtjtX59gAaKoG4eEc66PjCHS82vJ7agzurEuP",
  "key14": "3uxyZWZPtJQfGiEmACRTgVbTHNoYNJgTLsQy7vCpG1o1LBavvg94Gta5JAX4dueuSzvntyDEDFQdhNnWJL5C2jSv",
  "key15": "b9g7znx1ZeQk7Hoht5a9Bg2qzMRPMFPnPa8ycCffhokmYB4RaSkDqiuwpUaXyf4pEBL1MZb5BSbiJvwaznL31k3",
  "key16": "TJxWxZvd4sRRFhmaPvXF81frHLSNsfof33WcPsP5SEWohBU5aQg3XknC5PS9k6A1cmydmumHpt7jE2i15naecrX",
  "key17": "4628w9f5JCJgtRFLZ24W5wJzhA4y5U8cSYGrCKgfub8VwkeetxGtsRzeM43mduuh1qneen3ViGpZ8CKfPKR92JDx",
  "key18": "5qfFxVNKr7TK68QBSgDSxB6CeYa4fWzfQwirzjJudA6dgKuzRSWKGMgksRCkVf79sWPfa9hk63eL9vE9QURnh18g",
  "key19": "5NBa8cD3CJDXY13o8WaiiREASXFHjsSNBc9tTZVA1z1RqKvrS3DWJigTDrDVboG7vS8x847vg5hQ7bLmEvNx7r5z",
  "key20": "3ojBf1vTXndvwXLD17NcQJfmr5uBTF1YqxUencQrNdNhG2ktUXSXfHJyHa7WQHXKVW4smBcydZpBL1G8GxTGaBrB",
  "key21": "gb7iWajc86tYd3gSKFrowNgeJRv3ZSgs98M4xMfhhiL2Lcr3Agm8ErJ6g9Mu7PDQSbRc9eLUtmiXjjVPeP9dzXX",
  "key22": "4NfGKVVikPGFGyXmGFQXFhy8zLQTjPEjjthBUF8CqCbTRbYmkTGygHjmeCEZMSRUoVcuZ7eXtpUdCCxX3KsMPr36",
  "key23": "3FUjPe8ra1n55cpD5b4UySTHWYie1gZiek7ULhcVZyqTm6YSx8hbth1HXMW3cFeKZ232gZPjcrebHcZseJyZmDFB",
  "key24": "5GSFf7kmuh9eCKYF6NJsANvKKEjtyj12TXSogC3D3gbM8ncZ5y3gvWskt45tYntNqwf5SXo9PKMx8wBDgbmby6q6",
  "key25": "3FibmcspypTYj5TZ9xp1cC9WFYy5QJA6bCeYzbVfdtEszD6Z4wwJ6SE97Xvkr1Pud4GXANTgEa8RD5rjShHcg8wa",
  "key26": "2dJKoWWEZfp6kuHazmdmZhJF9NdejsheJMd45VfNrrjRQHSYdGAheMTEHNCEcxAMo28z1oGHtERmrvRN38quFvS5",
  "key27": "3crdY6FvME6BTuMjWJ9sXMaAwBJWWf2A1kyGxkxBXXuggGF7LoCvPMkVp5vZ2CCRuSgAduYgHC74gDGYxcNptF84",
  "key28": "2maqFN17BGfSWMgmMrtBgHTSoNe3Df3S2AQ2VMJoxBZUuLmtEYaBUq39TbzbGsS9JwrdbCnWtudcwgXgBXvTwAjM",
  "key29": "23Byzfax9yK484Hvujxg1p4iBMMSj2YuiNexjXqvDMwm2Yc2EEVCMBRs6MdcemciWZNiJNL2rc3a1sPS7B2udPGC",
  "key30": "hig49im2Jc3E4F5JGgk1Qis76Kiz6jFip2gnTZzM6vA8F161FgUfir9HaCBMvjqoTuk76rTsX2mVUu37KGCottb",
  "key31": "dpjXhevSGMCtPcFqsYSGzS78vzhfHKkQgHe8YuqdnVkugdgtvGSaBGfayFwvu6R7wvCmMTE7VpKmBZ4mxazYGW1",
  "key32": "2PoTHBMe7qGDjDBgGzDHgUUkHf9gVDWpsHs44u3Qfz5TMuyHL9JQc8pKFFD9imdJ7m9eYjVJm2TLKkZQHCQD27w",
  "key33": "286kpakjSyV6iLyj2kuzknMmJRCMnqyP3QSiEUh4EBZAzQtHRGcVmT9GqegZQrjZ9HtiWtfj4CpoLCUokuyoWFLh",
  "key34": "rb97ZUSpTUttHbVZkgXmsq44NeDTiSsavRutSnza82yLqXmUMXYtSYpPhXmPNxGMzUHA4YvcnQPyvQfYLf2yKr7",
  "key35": "2uTi8A43kHbg67b75aQa3qn6e82oWcVC9kxNDCXLcbTfp2aFDqr3Js3jsAfrXSE2wKzuWC52McrP55qrmhaBSuWY",
  "key36": "4qb1aPdPDRLUJs6vyYC3UtEcjkaYap3gZHZZqpa2VyU4aVsgwe34YiUXJV4pgm5AJLdqBmSHzSgAEVbh2qZD5LDh",
  "key37": "3pLX3M7kgRiyhbxibQaKWQFQ5WikWLj8YX5WsG7XcR1MEpWYnmb3MMcCci9wU81judrnaHzcArjyXyVwexivvMqq",
  "key38": "5HM7TBEpbHPnYATEbshQJ8yQNAiajRnQGp1bpckxpcRu3hki4cYi9c274t8huhFasY4mRaqjrYnt2fK5AfVcgvmD",
  "key39": "2dD44GffcjdZLaXrcVRbnPGWiYzWpvWxzRqythFFd1GiXP4Tp8Earmdc8rYAbZZ93wuUW8DR9X2M3DSgDDoGqB7h",
  "key40": "4fChHHTiAFTa317w4hUg7DmjZj9zB1qTBh5DKRj9sBfagn9ZhJ1kpde9TYCWg9pDuVeMKCyYYbmtmr2BWKeoAt3K"
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
