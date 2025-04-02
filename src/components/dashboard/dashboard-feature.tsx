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
    "2wx7tCAx29kyug2CmhNsYpZTbjgYTYW64BYipn9cKFyyotjep9XYS5knvqy2a5pMu6JxBTHV6vUkrwdZM4xktPEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6WV31anyFoN8TcPj94aXJN1T37Mo2p8SkNm9y9h6HHyWtReEbbghzvKV9URmi4J6YokbCUPRVfjHLJMnFG9NDu",
  "key1": "3gwhP9RUXad3s6czpLBu8W2Cp4EXpz2Fv8sFUw3uibMmbGPrbyjucpAuhkXkLBUgxMxtaidM9eHu6NpqwCCMk3vc",
  "key2": "5iwikC9hFVxnkTK7wn4pTEne2p9bGGZjpjTr6qTQXrqxQxPkSfRjWdomJh6cKvPPPbk3HZERtwmXkBYkEcUhXgAv",
  "key3": "nLfrdKCz34xSCsi9avWWNzED1NumUE8i3BdHmi8cL2e7JcEWqZ9yBXZgJpsov4GVxJR77Z1Gjk3EtL98YHF5EbC",
  "key4": "2VYyA4zZrUkZrit5ViPrhnta16MD8TLo4efr58nBNgR1DokhspqkDVmWLcrq1NjHK9FRj6vGEREPkuJD5Af2MVEq",
  "key5": "3EEJPhDe117xqCEoKtnMrVR9cnamtRsrHHoxAZZYBot9h3foYDwpKR7HGv15dueW9YkzBuLy2Kp1BKHyDpmh8Jsn",
  "key6": "qajX1YYHZQ9QU9Ag5pSdFjkT4GJaAuZRUW3b9gf5Lhgypkznyzf6a8YtjzXE7hNjCRm2a3cc9umJjbQnKy539gk",
  "key7": "f6YH2PEBSrscKwTRdbwTJY5qYkFsjdqXqE3KuSzHvAXaH8CLXqjfJm9dJsuW6WEUgnB4FByFcVV3L4zcVuGY14A",
  "key8": "3LJ9tjyR4kD8HWXu6UGYaxi9PZbPrLQLpc6BPdYxd651DQyPPQvni6FwcHPAaYz72rRiNHV6KJSJsFcfRKYE9Grw",
  "key9": "et33LCUxsAqipdoSebLHwySRM72jpepLBN7aSPAHyumHtk94zVCs8VbqgvqSg8DE4d13hQam118QW2bmnDbxckZ",
  "key10": "2zjWMRoTZDyATTW74wXUpodrMLgHkYGBYNrAbBKKucvferdVYGFLceWXMJ9KogD6FGe72QNfarwv4zRf2GUJi9L7",
  "key11": "Vwu6ixzuw63v2GKZXu7kk3kCvVey4hbU1ZFdo5zkozLgCoh1x1FAN3xY3nZiYd2iJKd1j9DAsptaNXiChwLET36",
  "key12": "3M1BuFMM2R3pbT2nE2ZSRJhszqzRdvqCWPaQUvo37VaNdUiEQ9ubtKEKM9GCfRRDvygvvGjPWmTTw5x5bjo244Ez",
  "key13": "3bs91airHYu4umSGpDEyVgLS9gqnG5Hd4Q7PtvtPQN1PWH9nUskPBRayHSaqykYptrxoPCBd9xkBGbzqYx7kdCh6",
  "key14": "N8Hhts5TRxUhC72pTfKi4y2zYi4xep6LbWGRRo32LxdHX3ZjoE4cfv3orcW7x8d44AfgHQZSUeVi26mMMyGwPxi",
  "key15": "KADWKCdU5SDCvDfYEvz7EUn49ZBpvVSPrbpx95q2QP3TStAkmFkW1VFDwkcELcqavu1w14Aff8iVxmW7BhziQRv",
  "key16": "4RxhMioU9VzpMZMGrta2aHeH2w1gvfD4DKzFf4NG9DEvvH7nZmSGGSuvrKN8pfvmAWPkKToKseZgefhrTF36bRDJ",
  "key17": "3AbJtdVNjCUp9sjJiu2AMUstVtFbWH3gj7RQAbpBUDUzsQN8Cuy4ZRkpyHsL3L1jshxCxx9resq9VSvJtt5a73fo",
  "key18": "5kEMkUhTuE8WhKQJA3DwcQax1bFtMf6U3aGXxP5mg3SbomqFKry5M5qB7Xm8GPXxdxcW3ZNz3ARfT4dEU3Wvpzzv",
  "key19": "4xFiXiDNMYJy3xgt7EXFWYEderSy5qNVDJDFpFSMN7oNX1iXsQ7R5KuPvv85nH8u3Ke3ySTvgksBQoDVkYXyaCZH",
  "key20": "4bEq49AjcjLWmaHRdEdQV94KP1pSWuLrMv4eZDTLiMdcKeh5mT9XjU4Uh5YjsgWEiN6YfACuhPQRgkY9iLwRE4XL",
  "key21": "ab91kYqrmVpWZBokZednvLb5Zof1m55M2iJAKAqtgTQnXDJy9ikSz7FKDHmgbjnuk86rMu6A2JMiPJyT4VokjtA",
  "key22": "28qBuKEZmi4vDmxby9TJUFGnRPtLee6aRj271KWHGZGDdL4hhDwyANea6sj7xqJJ33bdqqHUJSWYiMc8EdavpwDv",
  "key23": "5QdFFsvKWHHavfr3zNoP2FdL41WBdxoZXvxdboYWVLnqQJ95A8DErP6UHDhigKjtshPikx5TAhY5dQaALjeWwWdf",
  "key24": "3dQWwgcfZeJfqh2nXnFwha5wPVciA92FQ4FY3TcLUhFfVBjxsAZWnjDwqo5oem1yKHkp9tkxtMuK2UVz1SmLwefJ",
  "key25": "B1pQ5f9fGBS6eTcQKAzLe367fGMJ3LE9aXTELtALUTcdf8BfYyiyXWMMBM3NFQSZm12ijoqMCgD7B2H1RErU44F",
  "key26": "2sspppqvJaEa7pVXLJWWxo67PAfjUaKrAfkftwFZJvAgmHKQR5bnEQukznwFbjhya4RSwAdJRvX4xQvMcRpCoy95",
  "key27": "3rkKvknmLGFZnLFuUG8Xepxrm75MXjGLSmL2qqvsiuNh5v5V6fR6TwutPDwSNUz43JevpTvtoyDPc5y8onKA6Evk",
  "key28": "23pzCihLGkdySBiFEQtBKpUu43NYyKEuRcYLXLYN5u5cbMgxWThiUAHE27XX2Ng9xKHT3kLD28M1TK6gwgNvFpoK",
  "key29": "2cWwYXMg1qpH1YWNngM5vuTyXBS5sEFvhkpCkLybxpdVCYw2TqDSa2xygCJX7kaWUZbjZPz6JHK287NMWyzreWYj",
  "key30": "4dcA383USPW7FaGneV8G6SBKXccqKQRiYa57AEW1qB9RuEZjTLpxDbAfvioTGqYDzXNGHuVj751iTrnbHVT4JZBr",
  "key31": "LhbkrwHvwwa369ASjDZP9FtKDtjd26csTqvgSrWZ2BBX51F1fVyMtktaXQLZgCF6zjVP7b5VPK2YcWzY4Coch8q",
  "key32": "4beDsJehLp4QZQCGPg3iPCrzMU7M3LseQj2mCxVpiw1bQ2t1THbsLR5odySvCCe8DzeirWSnT4e2ng1JanJdur9R",
  "key33": "4cjWAo1QVsXC21E4P1qeFj8KAMbkK8SYsTKSM2JLoB3CyTvEzRhua1L7qT5jsLh5hexRr7e4N2nstCk9NeFYujWq",
  "key34": "4HVGujGLDdm4BSZMoz5kiT1PujsmtMizqdtpWYBGXYXL1H95arMKPNhbwrVktKZdh7q2HpVmEDidEKxuZEyh26s7",
  "key35": "5gn2gnynELsp7zWPzDu79ZiNLRsPC7szTDJ6dTSo31pwJCmMgX9czyKvNhY2oFt6N9cJmN66HSuVtUSN1fUEWLrJ",
  "key36": "QGEgUUy4BViV1nGZNPvGCgFqdTekzdtiPmaC4eSktRMZEK9548kNkKfkiD4Grhv9nNatZXTCefAvxt9cPY6tKNB"
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
