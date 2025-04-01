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
    "3bdfDxwHJZKQyq7wtqeorrYZMMTiMJeX1xM8177BTM9QJGCmsKs2vVj4bLjcZPHUg9XcAy5w7jgQ1Kpdit896Q3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PUM6o5bt5zJ9vLenhAuUHGn5XszLHGTu5Em1ubhizZYWETjc87dzcdSwe5HkACEaHB6c5kt28YD9c7ft9iJMf25",
  "key1": "5ryB2G2dVmgF5oiBC1jExMvaUB1gQJhDEFmWrfHNuwMnXvNoGM48wyKHyhN3aYPqRUa74Aw1mxx4zcfZLf7JvbxK",
  "key2": "pDHu59ZBB5vUAGE4LdHNkN1jg72yXStXyc4Nk668uhAxB1o1v9kXyVwn9ENtvkTpBDUGvLfcCnNfEJMRSapEoJY",
  "key3": "2jPpnsmuqEX9BaxDFpEMKxQPkWu2AHptrG3v44kJbZxWQdDrrSbJRtxLweZcB5MY5cQLWKzziFPybs3b4rVMggYw",
  "key4": "39arKUHAH6aPx7W84nB3RXeCiVY5ujwvTL9KHXimgt82t4uQ2UErvbdnu6zF6faRudCujNiuvSsG4KDJTk1tkJ6b",
  "key5": "5FWc3NToss3BV1WuDHZ6hxzmSYRKnTB1qGvtNqmbUjpwjezLxGRwRSceVA9bjGHYM1q8CNQBa9SuNKxdbsaadQbg",
  "key6": "UGrgdvEuYcQnhTJFTftBMNUBKZYcBsEWDVgebfcKD7vKeZuf2uyYzsQwSbQKVDmox6h8DbP1YJfEmoEPMNVjzvG",
  "key7": "2YB6aGrbzXN5mas5Aa4JLWr8NwxCc2rtuvpmUaSS2ufFMrDZ2Xme9wMvwckdcH1dF6myopfM2VZfpED3kZ7EtLtA",
  "key8": "4efnNqBauKZdzuaauNGMsaVEJ3mxqVct6pGS16EGJGaLCJHN2ZzruXAnsr5gCTKNpL5sx2AHSzdrTHoUmzdhq5Kg",
  "key9": "sQaJeRAvhEjYmYRCbQpAq53jChxiAMNjVui6sFaKSnTKoGvmYki4e8Lix3RiTXPk4ekPdzq4WBxzrfoNWFric9h",
  "key10": "4iVGfeHgVCK71BXC8pdf8DZ427jM28Fg7rpStD97iEBpThfgS2zpVAx8cg3MzRCDknNrMJHRKxM3VtGWyrYBvsqu",
  "key11": "26etxp8cjSuLcpckrevqRMzMefQvyg4FUDZFyCN4dcVUExp1NKXm5CbrhC4tfMX7s4NPA2tz5N8Av6DLSWYKeqDz",
  "key12": "4PW7jPoW7mx72Vd5ouVLdKixjHecFPkXLcWF4C6bs9xYFdZWRUwwTUV5pXCwJjg5t7wnfH8qNTyMMQPpAJAykJvE",
  "key13": "5fJAt6BV21tmSwzfE5JZipnGQjwPkVnaUfXeoe3W2rycDayQF3aVGQaPvqcwUAx8gjWbs8DGHp1NsnhEfBs5gdLc",
  "key14": "yrC42WHDXkqTDQRRAybZa46TjRUbTS6kr3PDuBmeCxw83mvoCyJmHxKmReFrK1KKUh8dSJPbSkwfjtkU4DzhHD7",
  "key15": "4ExRWWcj3DJvNvA4TrM6exjFBWNH8cy2oVFx2vhGkibBckhn8uippennRZkDrJ1DKhPb79HViZxoLiZ1bw4Mmcwc",
  "key16": "4UG7s1B7E8TboLTzgCxKypMh6ZCuiQTySJQYfnmMJbLRRPbSPvceNSPFSiBqs4iVQUgfaergYHGX7BE2ns9Ld5Xa",
  "key17": "2nxNGqAX2h9wqcxsfvRmhpStB7oSFPebBoFwKMbbQFCrLjsYh8FSPJWhC8RM6somd1doVxodQM1itt2CPW7jHdhN",
  "key18": "2wGzPq78YWnfBUKH3FsH7bUudAcERrEy7EPr6wJiT9psnKW1haRL2pwmuki4d25VrDnPiQu99y831Qnce2U4Y9jb",
  "key19": "4aBbUjgs4PowuAgmaCbimcbv4cWJABCYF5o2A8Dr5ZAfv1N1w2FXPCnGYF4DbCib66TMe65BtMHqbQrP6NMhiU7N",
  "key20": "1ePg8QEjBaDwBHWGrT1zvicb15BvowgBt8Amk9pfC1ZLd3pVdXD7vRk5rcrPWXqXtpEh6MPYui5E7imesdoTGNy",
  "key21": "3kths78YMpcS91AnaRbwTmoLmxyHNLTmaS4cJqinpYmux1SbDCkiRm3jcovH6LWHiXksHx2sXnCQrf3jsAoV1QNo",
  "key22": "2iHCA3yZJomjBAt4hKtcwWjYUkgZqUeg2tmaE53pR3s4swDwVJzM37mbfAadvwStw8nV88vSMsapfjdnDhu28Py4",
  "key23": "BaYZ4sfBWEVzeq2aYKMq2fiPtbWYDN93GF5hbFGMaERzS99MUFUKCaY777kev2BwLjyWYKH8QHZFZ5jXbCyTc5H",
  "key24": "3BsNP5q9bxYonV2gP568BpuyPXPfgCuxeTFmgGVvJc8wp3ZTcNf9xSSobfcQGwz3bacz9zxdAWRhQyzjM9iTnvzt",
  "key25": "2f4UdwPFnmuXveevHMdGCTTtUyhoTMYFm5Vca5UsVimHubhvdNn3wNZUdrZJCmCcHaPDcmMq84cMnav7iEr1qiHB",
  "key26": "w6QCER93Xpe9ajzcHwQfVonhbvwW9BpSyqNAaoEY7nYb6v4wQzNcHzwsdjPiNGVc4i4Z2eXDnQVcawvEYVgjiHh",
  "key27": "5UbFnnpBjPK3xL8T158tLFT3hXrpmz67avZgne1j94KWfPEBEjiUzaFeH7u7J8w5rA9WijAmrHR8x4FbVEYVgLZj",
  "key28": "22XDsiTgv7WUmLyCQxDKSF2dURi4KVzYXV98z9ytHamui5WjGpJceiZHkvAj6SEEj2k3c45jBKvUraAvZjgYG2pQ",
  "key29": "5WFufCY33rvdfifL8mMp6wZi8Ea9uNs836VD4eAHorYfKi9zNdsbdGvo4kCsYBjgyWz76AwaLVMr2LwFPhBPjmW2",
  "key30": "nmbFh9NHNwqPw19shGxBHT8pXg7D6Q8yt9PFpPJk9Ra9hVEoiD6phHNA8iMF14zTwqmKbc4EpcyLFt4yWxG4ewX",
  "key31": "62TSNJhmunW9gb475kauuSTq7Vce2PgFmwn1TqWpsPJeP6XFf9UQrHZeoxS5zLa9sx7f8QfwYTbpEgNy1kFzdJin",
  "key32": "5PQieUbAyxmqcq9Wgs7TxoyL2rtQVbdqs2R1gxJwaC5DDpNPhKJn77KyPGVczVcK7BEBXn7p4cnBPvCRKPXGvrWy",
  "key33": "5DGGXbgRQ225tJ8Ef9NRXYHggbYRTqnL7jCmogDWCof5J5MAVdhkkmwxyZKAkSSyBWSeNksfPX1AhrQwsVcXabQF",
  "key34": "3An6fB87R1SoVdoMPLKQ4ei5yy7dVCUJTFiK2jkmfWp5sd1EiCUxJ5oPfZFjT3MFL433h4KhuN1SQK2ghArj84w1",
  "key35": "4jJHYAMp7nTV3ZcmZ4ff7QnL81p4fLAjcXXHN45efZr7WPgDgYL9JjTeKXJ79hffxvYMCwaVJaZJPDRYQwvHiCCd",
  "key36": "2WJegdga8Bt3C9eUQeFz1TtD8CeDGU8hkn5Wd2QVS3GV7AS73jwD7bgVSpQTEZJKfNgBkv2utXNY1CGxZyzh8vJ9",
  "key37": "5gHU6ko4eerisEZS3p7eAXRDkSoAeUYR3SzE2Ttbbxjr2ai6AZqYLkfPxCj4AG1cjmAkwxLKTnbmpZ7wDBYvgTr6",
  "key38": "498sLrbo5YcJKyFMxLjENqV4nZv3abzfM4v7rm5fSQE9c8ECwGCMsYuYovpTn5uC3DsiKLSTngbZvMuQLLfDj9bA",
  "key39": "5QN5JQ6v3Z23qPNMHYyMwEDBX3kNLN66eLawPDWt233BkYYmkHaYAGm5YL5rMYkb7G6dC6LvnicdBWBqnt6V2Vew",
  "key40": "5JBQocusdXE2SJQUiQbvGrqGaNpmfM4NovbSZREXci8N5rzpM6kqf2t39QpmVucGN37jGaABLHX9wXh9TvC43ujE",
  "key41": "3UWak9CwoZWA8wjpUV12LWWjGEJhMGpwtALHhWqoDeUteUBWkV7cHxDnbuZZbob5GGiws62EbpWAspmjEVxHk5dH",
  "key42": "vK8PPeng9V6YxuwtpK38ZntQ5SXpBLUY5aKhnt5WKtYmYbgcPWHSJRnPP86h8eudd1mud4QMvC17eAyjrHh8nro",
  "key43": "31SkUCfjUXNpyfpsTxVo7JSvv95urDVHRqUHdMwq32sTDg4AitXHPXJRXpJmrF4zfwpHfKAeg71aDcXmcaRHkGC7",
  "key44": "5zUaYmncsr9fnhZEg1dFvfZcaDux3aRLcJyg9yURzrpabaEddbe4fErryiwQAjne64KDakdhRqk2by9FfzQqZhuM",
  "key45": "2bQ4gxNovszryZCXQkPjY3LCGH9dodUqKj3mNnh43cKPaEdPbxeGzCneUkyUWSkMC2ue9j1PudKAhdnkpPdPsV14",
  "key46": "3rSWYzMW1kLT8R9dPnZT9cnHS9KF7TbT7YNBrEvYGfPsbhExR8NmS8UJT2FWrUK328b8df69W6FxwMcoUY1dEnnS"
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
