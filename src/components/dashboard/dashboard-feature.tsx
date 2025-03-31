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
    "4UdbEVsZUBdz85ChVhmsWnVzKbe8bjhR4DRGmLapTnpqVWtarUPLWvXX75QSV7SLsx2ZnV6tUtT4FcALcxLJvY1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T95eABqesFbeAJVuEEC18gEX8pacWcdLmRJ6ge9CgaFHVDcXFTtBzjMvN6wZDVJKftqmfp26o8kXpSJbNPXHfV8",
  "key1": "SZQv4KXY1efXTfKLZ7xntDpMoAE4PHT7UYJq1cuvfNwXiPZGBEGWV6QLuuLPX8bCtBMKutN3qiwXn7wR6iFLuiM",
  "key2": "ELCVriXtMB3WTJDcP7NPVSnzxNEZwLtELJx9Ed9msaEpMYCJEvPBVaVPkvyhi9hgt5BPeGY4xkdjLVUhRQBp8xC",
  "key3": "4kGBYywxghaTxZyrA2pi4opy1whkW8Nj5rh3St7xABagFReBSCF2Xz5KQm71Fq3wZaXJNmGZwQ9hJ4rCs1NiTAgF",
  "key4": "4vMv6MEMvXqeQsH9JxdnH6oufKTxbYM7mXgwULsC9YoiH4ps1QfeA8vAqwEaAN1FMTm74xi4f3NPYRApxgvvVKwb",
  "key5": "32gPkLHdNgg62rtqSaCM9njsrV1LKW77GYvVSaszFwm4DWVEyM9zH5voCLWHAoi7yu6yAkaonnMzfEXocfARrcS4",
  "key6": "3dLM1EDXAyU5sDKiPjiwDW7Cxecik4iXpB8z1PhDgtdYE4aGmND53kp3qe7nzx3ebskoCvEgiq7LP9ECKLk5xWh3",
  "key7": "4jncGWyGbh9CfDQqmdBHRbRiyw2C1vkHUEoUzLDDZs1dCobz4Wuz7eFvY1sVxJCk9DGe5HSpVuekfgwcXtUPrAEo",
  "key8": "4KSHG1K91rcFkNEJ8xGTemKANJpdJ6RTt1rFd8qAB63dnBAp1Zkj63XWpbyZTti1fbP3dGP3Xi3FCWXdc829gsGa",
  "key9": "2Gm1rwsEJAGuwYxwc5A1BNjip4a6WZEMHogzCD9xToifpmTLi6QMePa6gB7dP2HtU9aZX66EQZeo24fAoi9xFqjn",
  "key10": "2cKrhERzgFtDb1DcRp8XXZHQrvJqqwmLRn6NrnBsMkiSBRSeUMvLgs9RGvW3Bjo9uCYUtfwgsuxU7y7f2uu7U3J",
  "key11": "3f7APEid4qpzrw2cov15fALutg8kpa4LVVcgzk7VY4KAebeBGqJwdpR7zHVFvW4H4iR3b95Fw3X1zLRthEtGawYw",
  "key12": "5XdfB2faz7aGS2FFVbXqepkyfXRXBhTYtorWeyG8Z8sXtyfqXZL1mV4SHbTHUiWRGiohLoHWpZewJNncdAxti5Qf",
  "key13": "5w5paXSTwSa51rsw3AapPXfp9mFgG8EiAnrKVE2ekNHwQkwiJhCiGyaj74RZ2nh5LT7Ra6CxdGGcWQruhwpk8pfd",
  "key14": "4K429sE2RAS3nxuVfXeTPfn3KNyQoQa24Nh4RP1cCHBS5PGJqy2kkwYwzhG2hrhR9QZfFkJ5m6JNCAe8N9tQ1Ct8",
  "key15": "Je9v2oNY7BdL9fH6Rmuvu5LCTPpWeYvLkiTUrw5Z6fRTy5ws5LDgKdGS31HkDhBDL1HxPaorv8KVBs3JHbZHdoB",
  "key16": "39sHUfenwSS42vGcAribUU2ee7odUTeB7zKiTFfUPNsn3NqYKEcf3Mv1WghojBmt3nHGaSDwEHE1MKP4MmxLFGHY",
  "key17": "4wsGV5HXHPMRBWv5bGttAKwCdjJpcfGYNJUeZP1nJuL1BKuZUDNhtnB1h6sV87TkgjCwajAHdSNgVxkHpVvzi2EU",
  "key18": "3Xha9a5aEHhvW3GUwnVxuDazFkRC6CK7R7Bpr6Tk4z5DfhpfTssUGVBLMyh1gqaoS5j9BB59m8wje7ZaiSfaKP4f",
  "key19": "4t5aeX8a6gobMKKMRVAT89NFKmXpqtP1DLnygp6jwk4WGStVwmHhVQgPdSqmofnT7PEDT9h2k9ThBJyBb7gneCbf",
  "key20": "oHVoCpK8wKoHQHLF4uKux6TetXLRpKGja9R6reFgxDXGgYdkNbg7WCpWiopFbX36gJ5vmHTggi7GPw1b6L8jVhD",
  "key21": "5hv4vDoPHSMdrRx58GuzmV2FBGdnc4uc7wYXQJFTKjpFertiWV71iYGePpNKN9rTeFmtjrvSutrLTjo9zaJs6dK",
  "key22": "GCuMzGcbUCbuJQ4n8rfEyQ5a4L7QtssCgDcoAuBN4pssy49Ju39h1j49A9gLF6Wju8cVesKnLyCTJsEhXBcTbRk",
  "key23": "3pZVk82MG6WXPBJCzgJMDhkYJqqs7pCgAuBLwyTaWgjETP5qGTJYjHjMFcXNm9mwmWtSv6sPrTBUEQX4J9BWoVyh",
  "key24": "g2pzfwEmTLtSwZkQfEyKuLjcfhpWxGVdpS7bivaqnKVgEguxLjo7mwTcwWJn6kmproUvbX2vmNU96RKZ69kYGQd",
  "key25": "aoS9iENaTiP91k9DodPmXyfmsZHNiwGKMKRd55dan29UcjPcX3uPo15FPv2CRzyL8Qj62pnAeuTLfnUbEShRzfX",
  "key26": "2GR9UUiasws2Xkjvh92byYWXAzNhGqnbyj1cTPtiqhgeohexT2529MnaWngVb5tnSPjyzEcndQJpvsRPcnePyji2",
  "key27": "5qvS174TWVk41yjHWDiKv8ggFE8tb69HXbgc3HgWFnoRC2UiVMwLsPNMgRyLWPtFtjpnYWdTbBrGg9wJwubSAvXR",
  "key28": "hdkASveYTiA8b3XFLtkvYxTT17m4Jj3nMFPiTdysqRgtwjPsu9mbPyTsi29m9yX74HtkNTAqM6LCaViSBsc7vbz",
  "key29": "K9Zj68McWKw43BsHHhy9fKqWX8KKtkeKkDxWmmxmbo1wzoVMqxv5biaQvVZTVeZJoY9Ja3Z9rCnEZD3ePmNWuXJ",
  "key30": "mNiXdVFaUt7AabKLyX24qFR88jNvyZbV7E7iXKsyUzftDijssXYYVftzT288yiGYz4xs49gZusarXffJGA3SjZw",
  "key31": "5FW6yskDqTskgVArjSzbCvad5ihqNuKMsCx9cLRUojFoDun6AijBWcd7ZHif7ZAunMYoEwY9CaDuDeWy1PE98mHm",
  "key32": "2rACeEVz7NySyfdJ8zF1hqUsihnS86DhV2YK4iyF1mvcR6oDSUdijn82pJQ2g1VppsLgd78qsYzB3XxhEVvCjzkv",
  "key33": "5YU5t67bW6KJPUFTCsqLy5RkXUEKacbBgY8QKLeBCbwVniJqfkkod8H4NwAhExeH1YaonRBFpttxkvxCgoakUkJh",
  "key34": "DoLsh2TZBMuQKNAva5sCi7k8LYm5cKjVesGJwgtc3TtPEDtnS4ngbNWxsX5QpnKVpYhiykqJ2HZfTLh9xLsAYzY",
  "key35": "Xcruy5uhXAMc32nVLEdV1wTgydE2XVX3fh5qV5uzaME9UcBJ3FaVRFMAqnErAtDX6oqmLQsp1kj1SG27DLt4jkp",
  "key36": "5udCYPQYzymdA5hSRoQj9j49jtLakU1u9HKYmeVWWueUoYmr6Zgr3wu4QbHK8m2zZ4HqTBWUMstY53XJnrepFWFz",
  "key37": "5TfF6zb2unsjSjar6g6mmeVdNVineMetwnKBMMZUcg3vVGgDyJPNZeLwvzcfSYd1VYkkVJUXpWuVED3NXk18i34n"
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
