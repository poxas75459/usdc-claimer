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
    "4hmjkGrbgd1Rxf5CVRDghzZZmra16nSzakpwJQFGsr8xxmzvGZZzpeZ6qm5WTZL5pHQSUPZixdsGV8bUBcdeSL3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHdykR7tAZWjV9CQYfqQqZds423CMtZPJPX65fNrGGAa1gP8MugwsEi9Z4M4yAPDfkXjKE1LCdDwojboHgtqrMY",
  "key1": "2LsR5F1dc976MUumoqajCuASZkSWP47oyQaQ1avE6bzLXkeBhkPzA6BDHZo73wW6VGe1q7ZaNNi77sC8QyMksJue",
  "key2": "5DRUpyLnHciByBemsM6gf3ottVMJNx9A1L57ejuvS1oVPswwD3wXynXAuxXqV8kbEiodJEhGcfnZB77gkaH5mW3S",
  "key3": "3Th8ekm8THUeeTbBtq1coGDk2Y91P3MixPidvrmQgWwoYoCuE9iPfC5EbMzFN7gobqXPoTG6UssiwvBeAnPYZHSN",
  "key4": "54oysJbjHfgEqSfuoqG3oiyD3ukUoJnz8rYEfBEWYiTc8kJx6Zyd9JcM9kzVMVvHKy6XZDRA8swATtmkghhVLiT3",
  "key5": "56AxPiUYiNj4B4TffSF369rY5zFn8XFHKB1MyUMLTJrdT5UzKWphiLeEHKiGjsHWjyDaM5H7hcCamsNp4ajJAGq3",
  "key6": "5CgdobJxec3SouMGJQd1iKb5HNJh4R3NYKwqNBCyneLoun19WrEd6UgBXWhni3vLZMnumhCrGeVc7nuNbjU8FFoE",
  "key7": "5fvKVeTcxzsqgKn2gaerPDHRZU8rxZ7FYLgXrK639hR9wrKxGWmwVvVhBaq1SR12p5knbAbG6fyjVQi5brHPrCD4",
  "key8": "359So9VLcMaRjR5PqFHJWFUbJ2w83Vds72T9Yx8tJ8o8CXQbdVVurBsRgD5VcB8oQE22H8c4Bu8reoyEHznissxV",
  "key9": "5uEzAd4K6AfFYmZ7N2oGRD2g3mtzDr3V8bSxvHEU6EvM3ngEDKMWnrLsyqEQJz71iuAVp86qZFpzc7TZzuP9RqAp",
  "key10": "3sYTBzWZ12mVubz5ffB9hpygJ2jQq4jz2BFKN8K8qemjDD1kC9ocSQKVeRzJExGosX632ULkNn32KpXwZkh9KGy7",
  "key11": "26uuGY4Nce7mi6rh6vA4nhMBqoparRjG5bV66jyD4c82y8gQLGqUSAUR61XCHrY31hdEE9avWQcapi7QEi4odgaC",
  "key12": "41k9JfmykQSc1hiu2TuSX6d1x46htyfMBdaLW5cYEm1iAbfNZSKjfHgNq18UDhJL68b3zgGirNrL8Qfac9jjFB4Z",
  "key13": "QEK8DkTEMBXba5XbkZ8LWFVWztWDRqM4Qswi2vc6JmtNpiCyxHzy89MMPmWkbY6d3tk8wVmaq6Wz1221xtDpnEc",
  "key14": "3cP6phDhrU3GJPNnGHXn2ShrWkwsLmCMPVwfEuhkSgzwRuhsyP6EeZp8TzMhMbapwcV5Rg5GS24jtJr7zhNUA8wE",
  "key15": "5APLrv94ErM6GfjQYeVnRhPULBMskZTVifswSAjryU8sMJD9N9qu8sYTZhwuRhJVQvo6JPrqdTWZj8aySjT1T7MZ",
  "key16": "5EEfXiqMwRuawiqZgXSZYagQici16NiyLwHEfndhr3G783BGPfPDwzC9eHLmLduLc6xw9JTKqR6qFH2YrUoLntLW",
  "key17": "5chQGm2XPgpCH4GJ1FHXKXY626YkSYXgzQeWcbKgPp5qRi2JGoo67Lr3xdKwGpELBXGk3i74JeDcmGToJLUHG57F",
  "key18": "2FpiXCdp8Lukcpu5vicz7yDSb9XSF7W4hGpoxyoABUjShAfcpi79uM6ufNirP5jfdrwk4Vspo4mQtsxwNnYFPMak",
  "key19": "52bDiYnnkthKviHiaBzcJM7BKPQZ2vN2p36LdL2rdRYBFQdjXW1xm1hAo8EFfZPMuJfLR2Ekgq1VoZDwJtka9UKJ",
  "key20": "b5Pmrr5YczN5znpdqz6i4czZ33aTUFd8sSXtaexaapTAZQVfoXYMjDMTYmW7DuzXEcP73MGUCTxEcZk8R6dJUnd",
  "key21": "2puE79XBDQY62rjPrfv2YxN6w2Txe1nEmtvYhYvMccm5ubDqVx7LUFfDPhrzBkP6Sxz1T75gBSFYuvt7fgNNsZbR",
  "key22": "4Hedtu3cK2HGsPnPZ29bVcqZohvEpLwfh15E45fDaWWown5bSEtaoHdSZR4pE17DV5Baa2FduJNfLmAKoo13nWV5",
  "key23": "459XVe2tszpre1n1szQ9Z9HRUswA9VKGRPysVvL9KJmVfEE1EEfYbWcj5MaCLba5gh6QTkGm1CM1L6SJRQ5v9yVk",
  "key24": "3K8HoPXgPJmNCWzyARZvtV4ZANwZKXV7J6D8QZGBK1oa2PfaHaEyDG2vJyJcAL9VKzzSRUj4xVRk6F89YWuPBByh",
  "key25": "4ou22cZ4YSXCJNNgw7Hw27o5YYgkKCMBsocKnkjtDV1tehJDNYjBxKHHASbGcCTaRnfP8w2meNgzWMSrHJrUQJ9u",
  "key26": "2agsVQ1eHEwzhSYzoiBpw226ReXgXRGo4UxZsb9hcezmuShdbGKQy8io9PzMywbAeZxG8C5YWzkub7g5ARu6dr8J",
  "key27": "Syy3TSNZ9oJKSdTDqdufhmjWKPV8Cyrhpy19PACUP8j5eWDB4DNgHLLebrEYsGDMFYgcDpmbocE6wHmhGbUgj18",
  "key28": "2LuPy7SMHKomLeJ9wrhdYjEZR2Q54yc25eZRg5er6eJ3Dz1MUVM4ejL7NDqZLYaZMJz1sCkpbYBb14C2Ah3EBdr1",
  "key29": "VprMRQ9JLCJiYN7dsjsgtLMCoKfvq3oiMDPmMYuwaB17GBaSK5qWfpkSTUgqyvinW5NzmbeZZzeyq74kxHBGS8f",
  "key30": "KxFqETYhDxB4wrsBbhFLRLsBs4oCKGNPTbBxW6ZXU1BY5nBZaf4bhtzZ3UUhQcs9v9NzJ3RZr98JkVQ6rehHyEt",
  "key31": "bEKwMN18EAaW9Tcrod41Tfopov8DyVqj4P5nxyGeEPCweEF6zbFHCA1eHUTb9nkbw8cSF6EcTK66rUF4ywMseNB",
  "key32": "4LH3pXNDkfuA8hSLPPfPDtQp1FeyHNdRqNBjd9mis9zoZmkURBVGNk8txLM6wYE5YST1GF9WKB5xqGaXtpoLDNXN",
  "key33": "26u7k4WFL2S9rWaU4Ash6jU7eDoENHoPuKLc2M347eHyPoiVm8B87WENc3vuzAwqbg8aZcqkUuRgMJ5DcKbGVg48",
  "key34": "35Gc2mysPdLRZfhR6YuFEXepf7RDK2TLNWWYWZ8Kge5Yrgzz3WcL2HU9cqUc2BqN3ScUCS1a5j1FviSxLM5CBr7K",
  "key35": "2LmCGnv3hhVh77dkqQW4G9R6wVPVnag56Awx4MNBVghFkrXZaJbWgdTfe4cvJ39UnpGPiYPFTMPYZ5AVJwmiPkHy",
  "key36": "3b6Wvz3jSNQ4Gos6SvDshdrc6FXymbPXzxGSmjuhpobAjNQByaxDrjid9paBHqic7pryXXYiA7igyL83oX4YXdKG",
  "key37": "3q5ptanfLL2kPLDuevttLsTwuZMz9M6TjN3DJTXiaBhoiUDwaghK4pZsUdXZ2DkivXAR2DwJN4cWBrfV4FCXFD8Q",
  "key38": "4FG3jL4y8hg52noxgjNbACzMECtya5PF8bW8adFznnE5cK2bkga55ATHxfskZyUpi7qP2dULbm6XxwzBSMwbFi8s",
  "key39": "3KvrjraMiJsM9ZzAkVwktaEGLj88UmeUc7dVu9Y4LXTc4joQ9AHGQTkoLDgwCc4CWxuNzBnY85qxfSYSKnQVqDjM",
  "key40": "2Q2tcbnL2tmuyzCBef2ALQvhB4LvrS74t6xSerS114LrrfAdUEwRBMVpzFS5uQ6m7VohtFcn5PLqToWpDfTmoXSq",
  "key41": "2C8gdYysZJBxZYB6JzpJeQyXYUJ2HZZTb2W45KDNBNrsiC2RGuephyFVG1hzzYfUnruP1J1BhexUh9fdsEsBGEDo",
  "key42": "47TQcFuKwfKf28JpA4e7HHvh64askhrCYojrpc9p74ehJSmo9GsnBD8cWRkVzjBP3q8gZFWQJ9xoXJTkCMqzWBLK",
  "key43": "4KTKqWYpbSnMwLdiwYx4hptHExV6M1x6Ba99p5dvSdHkiQP4QZUsYfn5uxwR5jAjojhwsr56jYPox45Y1tWZqqKT",
  "key44": "5px6gANzqoAXoc8uEg1sCvpUQ2SHmz8A221mi33SkHqLjwM88jc2adB3qWb8LunCovnTKdH8RpNmBAU8CjzqouW",
  "key45": "z5cyFrKznjb6GNfMacCmRdtRurzkFyQWdApDJ14FKcQiKsnsWRvueXdmg5Mh4PBjvN16SUuaNGnTYUWu1y8ePCN"
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
