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
    "jtESDDsxUjMCRUW3uDLTX9swtK4wCbYhjmQHzZR6WaF1SG9VxbJSeRd9t4Hdr4p8o8NPNWkmn7fXAmZo478A9w6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvmTCWKGvzg5k5ZdabbnKZEHUsPRoTiY2S7p4kZordNbccQMzXz5pWhAMoZB3yKq24F2uWoRnpctpKHMpqZDBc",
  "key1": "2wx2EvxDyBeydqYVNRts6hq9XudjcpsCbSFjNt6xYj23DSa6LogZRdQCVzfgxH9t1TuG36rmeX1VBaMmKXDHWxUV",
  "key2": "32RUTm6gaH7qJ8ckNLH3LnCBSaUpG8UwZTRUV1NRArg6M4W1U68aJMdXB12jwiwRJ61Tg935xC6QC6vkbeYeypSU",
  "key3": "5wVtxu9cFo9U864kNYwVUhkZtWumh61KAK8PwfnP8FnLfgwB3esswPoitvndzwYTNwzA4TB4mAaDxKTTc3c7um7o",
  "key4": "2PJoXTLnyYffnn7FQKwdpgnYmLu4E33PpTp4UWJCVXpqn7bpQusxQQvAz5XKfsuoJUUHkwJNrf8P4fb8qHsQAEmd",
  "key5": "NKR9SX13cLULPDVC3BpmKBpdzL7PErKQ9NTLXaQ53U7bhcEXbKjugTNECXq8XT4y8mXyMpD4iRPJkLTdfBwMGVR",
  "key6": "9Gi9fRkPMd34QWjr9YvjEAZC75oHYrLL2ifqfc59CkoDV2ru1UZkZjPBDsMDKr8rFPjLUK9K2XRKiTSCwuHvEzL",
  "key7": "2kF7zHcjNCF8qsVV724YAXBDDKNzkw2kHuqEu7Gceuysn9Yce7DuSDXwQhBXJhqVFdEBRxEyUWUEzqAdwfmdkotZ",
  "key8": "CYTEsaeJbNUCTZbXKyNPS1k66tiCxE5Ndtj3Rf7B28svRsNjumuvwEMWq2f7KiZ9YpntXrnZWsRv63GGx5v1xSf",
  "key9": "CfqqAW7GFJK9XmeZhhUDMv8Ke9JDa3MKn4gR2FmNycBgNrwMGe3aGuSof66xexjttUpWbtbgAVFuDDJyGSiDRXm",
  "key10": "5ESMddeL52L7xiBzC4EDaFv9Ef9RomoPkd1b3ezHTv7d2qzw14f8xjPDB9heFdfi9aYtcTNbXAAWzgHWz1AHwNWW",
  "key11": "4yMCUeSfTSLaqmP2paTpNJ5LkgR48GiHzV3EUTdpbrdg2m9LYB81e5CwrmWM1AZFrfyYbchFsM86kQWAndZLfDjR",
  "key12": "3DtGB1LVgRLDydYBPVVybVFLoXt4shWNFU1eMG1jtxLEG7YRK5qe2iLcXGws8cpw9dZfcoq4z6xzKwPhAuJR6BeF",
  "key13": "ZZsJXT5HKiTRBESHtCuzcoG5iwap6eqtbkp3PKuLwQs3PzToyzBNMzi43vHsYpQCN3vPZ34an8AZjhuxk5tjvd4",
  "key14": "Vc5GTyimX1UoPAEM4znUVLDQvvfCxgFxoDb2LEaXUU1kjd6YmbT9pNscJFSzTTpLXLmr2xQm2GZW64metLTnhSQ",
  "key15": "37KER4prXTYu4dHJsimHubLX1a4aYp1TnAK3S1QutimG39um3DhWygoz1cHoJHHRQrBGxcWQW5B5wUtzPYJDPEM4",
  "key16": "4xFqFgiSJSbXrUs7VrQuADwFQHkpkhGzX8pmwF7y9gorBWUbqfK5UHsjQxkvEn5EFbSu5MPu9CwhaKBNmLy22tF1",
  "key17": "JUfFvppZ6jt1JJUGS3ccEX9yaaXCm3HNDaDzgTPpQLitke95BMH7DwKM4dFW28bWn21dCeesAeAvZ1pVFRsHFwx",
  "key18": "wPNK6k14Re8WShRhiA4SyfsNgQs2gnRdGA5oSwLSC1vz6MtAqQ7rrSKFm9L17atrWbAUdEW9wFRRctDNfwFmJmo",
  "key19": "aXQNGVSyaMeePDhAZwT4mMgofiZViyTCSRzv95RjvGWYQC8ZHPPtjzqcein2fLFb3dQghZdH52fLmf5Dc6JDMz4",
  "key20": "vPBEkqBa6Ax5HitY9o4XnnWwvTy4Gnvij8h5M1vo4MvEwrmevCjHGznLhHEZUM22N5okg4fFCLXGSvNQngCH5mW",
  "key21": "7NpByYRjPkWeqEzHfDCdoJFHBp4YnumFzrwf2vdLuyiY7h2mjx2seswLopHuL71GTF22LPHBZBFiomF4duLRMz7",
  "key22": "2tU7iFo26N9iWE3wEjKm6W5iEPaeNb1R9Cr3SiAcwG4JHatHpokzHnkCJrk43QgfLG4Gg5zKFzudfTykygqGyPy7",
  "key23": "58ySeLXDEtb15vzQomjQ6PQzEJ9XD19Jxy6o5yZrfFBWsBuCFoNVeW8WCUtaecjwJxKPnvzWKnzWdSGo2LzvYocQ",
  "key24": "5NnmEQFfwF4UszSuRmRWbmb5hZ81rFN4qakiKZJh31BgboEEUqB5xxapb3bxNb2zPyJH4RhFoKenoZCVGEiR4G8",
  "key25": "FYEYeYD3xZ6KAWbYQuPmA5rbCU3z7QJ8genBgPLLy8c6mZtTWZbaFrCWtHpJvbbHB23QGn1Wq9XaA96WLBerDno",
  "key26": "38whYAAU6NnzUJRpDWCmYNgRSERyhneTisgiihZvShoefWfrKHjcQ8czu4DxYdkH6jnt6X2MiV8cpHENCctZdwfa",
  "key27": "4RA5rXsHdXSotV9wzwLCkCE3qj5h3JNC5rNk8fZTGEu5UssqcjQe7NZLPAtyUVSm9AY8Qk7k1JJweE2A5trEEQAq",
  "key28": "2HBXRwmC4K9YsKeWEbtCZW87uF1neeJs3pjqaJHZXaxgdBiTrHfViiYEKQCp83gcDjUzLMmSoxtUFu89m3Uf7kpu",
  "key29": "CKkWdV78kx3drCMptz822xCHc5oFFGkSjU3Cyfa1nT1fpRk2vwtcnESa2DbiJANsoF4oDYAi8iTbyRP4j4xMbPy",
  "key30": "2Vq4Qt9vTpvvXtgTqJueULCsMFJUYbEgEkrpU8yH8XWPwkfCXH96X6PNC1UbDCixWvk96ipzh8kEzBCQVcYexjgV",
  "key31": "nieHfgQbCxiK6aaSiGpqMCfRYZphfY59R3wE4UTGrgCvhAPM1B6hPRVZtKAQgUU4Nr9Z79cvF7LRdmW9qQnvrDU",
  "key32": "4mEwfZa4rRw57gfURJz6JCNxPpDu3QiSjJDvnB3KR28Pu8zjZhdiUB44Zn2W5DA1GQcfs7RenJCmnpN2YstLKmmw",
  "key33": "3xnJXLGmphQGDFNXyA6QyW6JS692EevYezUxk6uXUSpEji9ehio4Qd39u5TQxtCkRTcsvLgMr1ZjS8Ajz4esrHGi",
  "key34": "4qQGzPGj1p4AXBJQqeBPXeD4LJwRcBmQRCJPe6zN7FYNXborcq6hj76kS4qGWYthTwJqnD2pdrzn9eVh4oFXzk6T",
  "key35": "3rwp2Sc1pNeF6HWVDcb8sMmmXkVzSV6KgHVDQ6SWac7g5D4WfbEpv5QEN5fo4qzaBKiu3VwAER79S5hHtpvuvbaM",
  "key36": "5VRPm8xXsdCZYHV7wMnV87xmDTToKM1fLCz4WgKp8AMFq4vTbrZk6ZuLgEEF5rqC8FKcRtRpovhfJNPkYAWWRgn5",
  "key37": "pFG8xkLrz6zkMaJ6fbSkTWukJNwxJCkpVAbQRPvEEKtNWdMc5E8me91eupjm6LtmR4to1eVjJXjgXPCjk8MEHv1",
  "key38": "9WcdPyboNWQDGzw1rE3negprbitmgEwWRjnZttCVbcrGGDii375tTSjvntbnBPXUcYFLGYhHbdnKTPreZ3PTiFM",
  "key39": "2qw2Mb5kDh67bCA15URzbR6EGRZTESdst5pD2aFLbKMya8DtoM4rdTkA8ncLXQ1ME8T8Hmnccz8JHatmbwD3xFsU",
  "key40": "5TnGFTGXyHU1MWfPwBmcu7NxKjBNiKjVtVvu1nU9cy5fn7VC2cB4QcBtSbm4Edq83jsvLsforfgaHoAY3PmNLCG5",
  "key41": "3jrTJ3LqqdM6pgqfFAYjrtt72SD7L9Jafati8V2ThyhdpbavWqxttpeNadCoVJ5QYGY38EFJYXdn2cePfGXHWTRw",
  "key42": "3Bs1upp4K8VmDc275wxEnnmtgxT4XQrW4gNeZhXm8hWrVhGdoijDZc39tC2V4TFWSaLX9V5vVzLNgVbPPV1yU7oi",
  "key43": "2A2QKAoi8fhzkVGhrd1MCwUKQMqdiwW621nbhZA9FUn5md7ZwrMvpnUNC2MhYEPpZVVZdx98WceLvwZqWMJu9FhA"
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
