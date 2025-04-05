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
    "5PoDn7owEw75ngpNSwD3dHXHa5W6u41cezUQf43qWYnKwEqtP1thJXawFw79QdTsKYTzZGoS5w7RPRY3KVx1rTko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CE6F3p34629SGenNTYaRBL1jfNMvxghKBe5aF7DFcLLB6FXJ58B7YeS2RYWQrzQErouAszqm7cFoqdD9qGQkmUM",
  "key1": "4No2jEPhxjneuBJVKpuiBjGMmTCDjBVaGWjG7T6RXX3nkVYJpTWP522FY32Ldn63As9inySoQ92xCLqdKF1gwXKa",
  "key2": "61s61ytF1bouYY31GHxHhmT5EyQDSm4e7EAG5XRCxcJdouE66kLnRfRGcjT3yVZ8m6FRRHRS1MJzZ1iqerQ6ctdv",
  "key3": "3x35g2dwA9WH1cKLnDCmkEfMHVUZno8GTuMuBT3TnKTMva2SEa4s67s6xFftiZyfDnZz2WSLR2zo99DDJX9NDZNc",
  "key4": "5wdqjmFJJpKSD64efxZTSxkKGaCNRVUDRK6L57ArxBLkLBeEWDGi7aShyFgi2HjuKzeUjQiHQx8fPouPf9QJywjc",
  "key5": "3LQuSVHsJt8uvj1MLYKAcQo3y6mPAjhZtQKVKriPkzcpARkGS5Pw7aM4Uww7tWR7x3xdLm86zcQccm7BGKbUGXSS",
  "key6": "sGMmD1EDLm1J6JSdY9HK8w7zFtVgpbSRr56WjaoDdox7PX1W7y6vuWDftw63nUi2fbgBA3voWMw5iHpkHkL6kEL",
  "key7": "5jcpBG1GybhiUrWa6GmZ8giWnsThyweWGiEZuKt4HPU12gBNxqnAkzdHjdwapie2tsmA4dLMh4Vi4s1bL4Fm3M1Z",
  "key8": "3MzypuAjy2pVihqpdgW9Ciuo3ZXcSiT4sPtjpWnhmmEeCQkLirpec5d6GwME2DAdVjaBn8z6EgtRJUv3dEnzTyLU",
  "key9": "2a2KVjGkzWn7ya2y6JJo6aLhk4FhwuCwPhkeApkSDQHgT8cHDNMrMoSY7Wcg45bkSjerpuc5BkemBTVuzkjrrqj6",
  "key10": "2TG11PZp8kQofLmmTFJbtA7mS8XvkJWYE8UGCCn6UFtv6VmZxwkr5xWh1TJoDdRMEnr8Pk69zCKYqkp1JHobfEi5",
  "key11": "3qS2xe2uQv3zvwNkgtAX6XdxmMWwMvqQtZr4Rz2zpo1xadm2VfnsinGNpUWs146GEhHkrYmACyVoEAf9ffiv29ag",
  "key12": "3UrGFwYJvu4AjjwK7s13RULhH32pCFoskcF2YnC5rGbMQAu1ZVtyKbTFJnnqbdf84VX74cBSYtkzSEVfnPMWzLdD",
  "key13": "4Yhwqkg8dnPtZiri4v3p746dpYsdyBcTSU1FTjVaf2Pbwx6v6b7FZHboPg1KEUUeYUJ3FgEK6jBckxBHKLUBmUZH",
  "key14": "47JCfpYbpxBxwrF6jdTuk8p1zij2KgaG6cX9rPMnehWsn747yFpVNL8Uwp6T6UPkCniMtE5ysXjnBdH7uy1LmqtS",
  "key15": "4rXqtMJM9zuRNupKCfnookpQYoKhoJfoz5ZVeQmRxPJWFZTYNB2JMPB3KYtu1pUanfJFTMsv5EgXndi4STVfJhHS",
  "key16": "4TNPeyCGEebydLcM2KpvXLKuoyLFoz9adqPNeZbsbLbgVdratk5AtCDNqSyAKNUMCHwZSg1KX9RrTxri8fUsqntH",
  "key17": "54KmAi5QFsTJY8kGpjsBoGWQxyjgSEQXP8JCCjn4vjTuUwCRqrPRo7mzEUKB35cpf4ueYqik7SHQ8gWpCate4EJm",
  "key18": "2k5xmbS75EGMZshWJqMBpmPtwLJiBbpEk9YsnVRYaMV8yqFUsmbCmA5ATUPy2BDvfLYfdfVX4x4n9Zb69T51nM7s",
  "key19": "55MNgnnK2MPMYVi5Ua9vhS2XtwHf1Edqfa3KFv7ADhaZ8zzg79smJEtNDWuiabkwVePSr5EF38nCGAucgwThn1as",
  "key20": "JbQC1NmNQswSMNCP9pr2JwTg3qEW1QYFQGWLm5KnBPwnNBs4zgvTSgyEpVwJC2iYcyJdmD4uvL4zg9A9LNGzVkY",
  "key21": "656nwJrGFrperbTtGCbHMcTs9dpQagt9hwFKywXwZk7EmwNBY2carSFZcmx7iZeXwmvwgmkgAytLYFRQhuHozAT5",
  "key22": "53dr4umtuDjo4jFymAFD74khTqhjmjd4BDhcwzBNabXQQfNE69zs7mod6KWqgXuFPoFzEkuHnbCbuwobEVdH7Uwt",
  "key23": "ZTpmKHB2yH6HPW78p9rXSAsyL45dxkJGgMqYnffYmTLCacfHZDurHcezYm77TsJGnVBhYMyh5KXnvcPLaREaaTA",
  "key24": "4HK1wpBGuTGkEvVf3US6mpc9ptpaS5qNxMdgBRRz7gupm5ypNGeNPDw1wJHsMboswWYT6UYVgGTUSpcrmTzz6Rqb",
  "key25": "129VBmw4577WsV5fKTGedo5rmBGiHWgNvQGNi9AL8tJfMCftjsFZnvcnVphYUoXqP8ypsMCSo6gVaTYsAVzfsoV",
  "key26": "2X1qjZEVHJ7Mpz5PqyyzrehNru6xDQJZbJwSbWC3kJeRNfGMCU9SzSuHFxFexCjogxNLCgvKJABEh1LoKLxg9q2W",
  "key27": "5PuhuH7iLch8XjvFL6XfwURptK3vFugLiniNYVNeVCugzbYEyHGvp3QNb2L3HYkTWGYgTMKSDyaC6yGXTsSpmJpD",
  "key28": "3Wk4c8w3eQEjje979oerGvV13gpxWYNm5Cdand9faiG1uVfxznbcyJWfJzMBtomz9dULbwDNtcHcMTMnoy4eMC1M",
  "key29": "65odpstDLA4rs4TixVdtRXJXc7B7rnaxcFrpkhZwcJ7fzU2gVZ6wEaMvimHDFLucRqj97yyvNEWccr76MoFRVoDX",
  "key30": "e1nQGve2Rm5KzuuwP9oHj37tZwx7XoPxbGZCkVaATdpWCCAcjqN93XcRR4j9KnjJ1F3Qf17ZXnKG2uJvTWkCR4p",
  "key31": "UNdK8Fq5GX6X8tcmBDuVJF1p174eKkyKfPy5fbKRsQ3EFWjFSvxAqBtKBNQuJqrUHGhoyCSrvqRVsu3k52C3dQv",
  "key32": "5Ae4TesSeoHQXbadwpvrBxwrE6GuNASd9tmtqcSw5quVEF2jj3xbsJ56K8jJZcfXwhLNNQkurH4dj1XGMkqt44jM",
  "key33": "56TasK3NSqtvvMUHCVU7Cf9iZ98BZanVGqWVz7gWKUfonhtYP4Fz38AVBDnAnKzUoeBAxgoySwuwbbgoHftroxGk"
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
