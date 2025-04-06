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
    "66vwVNeSdrqGU6g2QGKED3X2sVsxNvFfuXsqF6pbwxL32PCvZ9rLUDwcSVhVve2v9EzV9bx8eAPoDC663EEbrhc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fFVwGm5VpGRpZZVuaWedT7fr461L4nkRW7ttMftVjVLpRmKgBMqS3jMV8uDxmrKLWDHv8c1uHQf5gGMZccA9F2z",
  "key1": "3UKN6Gq6mzKwBx5Yw7xQs92CNwJuHTURJ3psnDdKbcwDbyofW83twKvdgKsnpXqH3hKKLiv7xxVXpC2sbW2LvmS1",
  "key2": "KAgTULz9RACzRMf8eJRmyJfsoyCWX2unvqRTJPNZBKBk8DY8D4661QkJhHueD3ZrZ9XgmFo9iFWr4JMp1QVuE5y",
  "key3": "4uPsHbTERW4vmgdZNrzBSB1QQne9g1wTxyMwNry1mxAHCZZWcwFGVmYsf9Ucd5NSDci1p3xzDV6LA7T47hpXrMEv",
  "key4": "3AxJ5FyXqsAnin1wNRxL2PujTTjBXJ4hk8T35FmVSR3eEMtVJFWrMHDaLEV6iugJVvNUgpzeHbQek3d6cEufSVnN",
  "key5": "5AwGgQ8H2Xp9QnbzPugT5pMkPda418VbD3KiSXHp7p1X7XUVPsEcpjcLfVPAkH9dwHwKEp5Xr7YRhiQgTSh6xQsC",
  "key6": "2TMTY8joJJgSVepR6rfuKsS96v4RxfvgG9xUbNwPj4YzsCf4qKoEcExLZsXxjqpC6VReW1rVCMRozsz9Ph29pHvK",
  "key7": "2k76FmsPUBfJD5hxdySFC5yi72YxwpuH5gTqGsVVc6xEgRMCzYNLpUPWqsbb1aFRiUBQYJxy4Tb9AmD8sxneySXW",
  "key8": "3KjeiS93gHnLWkcfsBoWxnmMzz1gSM8SfJeCaVn3aEu4UhUZnTskbdz5GEdty52toruck8YwwAjTqZ1F8fGk3Bmf",
  "key9": "5AkGxicbQnaRDShzi4tC7Hs8ejvrqaXJQBHhyYrR4aBKTWXUPC17BrUJCyhFL2JJx88sr64n2RDcGH9WvfxrTHYG",
  "key10": "3zA2aXHMYQxeCGqTKkgSPYwj4MVt1bMts3k9BiNvWfkLdzwR1C6S92or2SHZ2j2wSbX7ySCummHExgnKMfkHWWiz",
  "key11": "3DFtZ5oct7inni6E59ftzTgee2Uj8Cz3m5pZKry1Pf3aTm9q1NzwxCmw2Wa491udHDUgRHrR15ChFtcoBPwLyc1M",
  "key12": "3yduTX4ch7mkQS8BEmLbk8ABzPRzzpvctWHU7RsRSPGjB3DTxQJowivrhGQUj4U8EFcfRhDEVoCnZiPY4a196DtB",
  "key13": "4C9Ey31zGuq2Xzky1jDaJh5sdjhrb8cMTFZcg4ACj81n9zpTEQ1GzKpUWttmXrfbetyyGoWgDWQQAKy15ZAmgLdD",
  "key14": "2jm3wHUG6zhtmD6P8BTK4YVxNsbCeJUCxvFu6wyeHmgGHfadX81L4FzNr6yExUhcQwRYnYYLRDc69jQmTYiGTyb",
  "key15": "3EQGdxShvezVxiRCGK1FmDuz7Wj8meadEEQkdBUjCqQiXFykLCxNvLLv4rLoGxKskTyqjiiseXShRrJUDxEQifWp",
  "key16": "4iAsTmgNxjmSncGWGk9qiYf1Y8JYe4jr5829R4zbSRwdvATDiTjmo4xi3pZNYnfCa89XuBtMguTa9PYRbswo1saL",
  "key17": "UPBaKhgxbkvD5ascB166KiNEPwAZWeXQkh1WaveiscnGPcanykuWocNykSYeegWitC72STeCS2cEVoNHiUSYJHz",
  "key18": "6SFxcL3hHxK3AgWxSrxsyvMh2SNzjfg4WnXaumv4cHx87ywi2D5QJkqUjvRG2Qi6yGt8KKdbY316bcrpzGLRAqr",
  "key19": "3EM6ByTvErUsUWZ57NewQPaacTEnwbERc2xSx5cdj7eHtYjWQCpZirCxqzfajHuzAHGYbUCrxLa5wYQoPX3SNNfT",
  "key20": "JNfPmWdScPaYMdoUQiDMK2DgfpXT1GuRa87rzHdXNh88NoT9jwDxnwbdtmBtR2D9YRbhiWjf2MgB2Xij3U7E9Vf",
  "key21": "2suZX75wVySiwDmkUjJ3Z6GmfiNgR8q3H1XvrLAt1uLGXUvU62CcknRsUBbEvmGSWBSEJa8Fo7gUjw9jGnCgUJwA",
  "key22": "hZG66BczcEickpFMPoMCSGaos2AvkNkZoresRR2AaucLLPJjDtXv3b4YouHSce8Wikm9iWfx2y71iKyLpNXcZAu",
  "key23": "4e751vy7vCR6jH1xXuVFFx6AGqeceLHrPo2kkzrnmEkx2KbQsLz6HF9NnyMACxNAyTkrtVf3vj6mK222GM5cSGN6",
  "key24": "5mgWVCUnk4frdNhRYavzbiZDXvyzPK44RsoJ1uWCEkV4q9yxSHYChnRhXoa4iCDiXooEmkcuXZFDhC3KJRVXZk2p",
  "key25": "5EgKuEVqWrv5TGrQEsnQNt55brYF9iudp46yPfKdwJ5FYapnNsyeHnFoPhavXHmNsrKqmkXNcSbXp61NB4AYRJJU",
  "key26": "5Zgmt2bytgqk4mDwGwMeqRncxrJL8H4RYW4jcMoD1EUhjdbh8bGmQyuyMWdkJEWE14fBi4YkbbZR1L6s4ngxuxGt",
  "key27": "52mLqinD6hbGkVgtfr3Yrk3aFLGNjXKc5jWkQmgRC5u5AiaQRS4w6KfqLWQ7edZyyYr2FdCZV414VoKgHDJmVx5S",
  "key28": "3bBezj4RXVeHih8NaFWUKaJkb3QRoLBaUQ54zpELiQ81DYWWaEnx6wWb9SS8niasfu4CjDGdr7SZkU6tJR4KGhy4",
  "key29": "26oo1Mp3ktkSXhVhXq2dcxtThAYEMi9hCZUaHJ9JjVdRDQtEHFU3aQh4JiSS87XCfePvgpbyyCfL4hBHBsGLTnHH",
  "key30": "5RrQxVnSptHxJVEnKKbfAweWRJsbu6ybNh6paVbnXwSJLVEycG12U3xJmccKB1T9whSKurSGRrqhoFqktksmL5Y9",
  "key31": "4NgtK7KZpRSwTxPiKNhTDCiZJyYs1fTy7wqF9DfVZyqqH4xHeiTCrNU7AcQzL4QW2odBZozUJdgehVGyU84C6ur",
  "key32": "51SoHrc5TpYXHyRGXz7EeBzi5hrUbVaPaG1qAsGtjMBB9cK9cnbZeozgs4YEu4vc5VLmMzezTUrdmF6n2CVy7r8L",
  "key33": "QZKXmuAaYHUC9XkT2ogkWXWdaAFnNo93JP9MRoBZVtutFPiNrkGPgS7CjQgBYmVTm9AN2SuhjLDW3hyCFPkeYRZ",
  "key34": "5xLhXkYSJbJEvqHknR9m15q6iNEXyB3Fmh8y8KEZXnAU3DpjcECCMDKnvPbGpU5KR614vKmez7yGdQ3PoNU964Lq",
  "key35": "3M1pEoofjJ5VpGjCP5gZZ8FtndRRrP58Ez2HQ379XGAw3amemzbZUzoPpAiKMGYnb7isBG6vJ3bgQjTQ4qyERJqE",
  "key36": "HECzDXCFeULFXkkaVRNJgD5ZzDe3Ztd3oFndCLj92tKyx6tzh9ZqLZKiqk286mMQ8BAxDkuRfQmx4CUQmNcFCxR"
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
