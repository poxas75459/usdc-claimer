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
    "42Z5b5ZUTQgkbJ4f2hEumJbwcX9ohVNUD7kLDjAx6eN4w1XqFGXc42K5caHa5LHhRLqUcKNBZadJexD3Sx6mELDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WvbDN66SbXcnzPgiUyvpdc7WEqDcnu8VGUQqYb9GMitvyFM8ujLXTKDBmNe4PVPcybkMWtguGrnE9jqCgM6vzvQ",
  "key1": "rPSQbhacWojRMvD8AzVYTSKaJ67KakCimQwfsL23xYGaMe9dDTz2eXJ7AfVv1LtuHCwRzLbfE1pf5W3r5zf8oCA",
  "key2": "4LirjMcyUbiadPQsf4jtxs13RnJnLQRUsPjAhUMnvwvb7ob8fgir1SDwSQUW9oVALYyirD9rnsrFgbLcRNVmMUkb",
  "key3": "5y5gr9pa8fF5YaDBGaSKtoTGMbpGFZuwDR566QANXbWs3d1HFdys9HbJhU1UAoyNbMZCkvk2KnM2QCGKh8u3AHSn",
  "key4": "Xh7R6PaZuuaTYDtPRA5zzf7S4txKHu5w77bCf39KD6bHeGX4fMT7oCE15AJ16xdRnThauJKA2ZCC9Yv7CTzeB8G",
  "key5": "4Mc7a3McnX5xSpRPJFWoo1cQWdqowcuwxsf66EXGdwzZ7vtAGDPFoDx6wR63TcHcxziY7Gj5M2ZzT1LpUyhEEPFv",
  "key6": "2vyzynp3ej1EMiNvw1XDsudAQA9zY4CfEWUUHHjerr5ddwRLr8vgQSQqD1eJcTAqXjyqurLeP3fpBG1diaUnSz34",
  "key7": "1KFxhFB9yc7J5XhRYE9VGofYKmn7EM7nURgNA5fGBZKs2SvEFGM2aSKiLe8dKRQ3JngZhDfhgXg41Pb1QqWJ1E5",
  "key8": "4NkdXoNf99ckzWmyuE3iS7y9uhmfuVPMrZsaixtatHYSNLZHGnttfZnj1TQcdb4N3KTHWSHZoUBjsEuQeHjE8Zef",
  "key9": "5ArtVoA1J9qzNvrmhgBvrLHMrBsGYwgNVQvSALxazTPof71PGqkeE3XoqBQnL12WCNxvsXgfcoFyZBx6vBXfzFDe",
  "key10": "g1yyt5WX98AMnqesef5briYVoNZ548WCHiFVDUE4qVUqH9v1jsgFepXKb144MfJdpoWZWQAKoHa3RUa2vin9iRG",
  "key11": "4cFym2F6n12iBgA68gFocm9gMmaZeidDzvyd8n8pGqDz5ECTtCWfxYVYHkSfToZmEURbaUgd1AWGM8Au6tPwKPsX",
  "key12": "4iCQCKUYgCN23y5KJNqxdCXCynVv268ZFgTJXGP51ENHWkyiMgqhHTQwCvrsCRPDzNK2oM2uBYQb22yxTgZmXhN3",
  "key13": "4X8YrySQAHx4aiznrEDLdmWRyiew2xobkbisWwKXAw9AV4e6BccP1xsYG9zvXhmThDEtjHu7iqH2rG46s7uRVDm4",
  "key14": "5BzdLG766HRLyqzdctvq1mybQCLbnnyftSJmYcepL7Bcp6T96C4Loe2FN9JQZ4ksViRkPELe5gFz459kYAoGhopC",
  "key15": "KcBTpZS7zduVA1PjVpVBPkLSMjobJPn3fZeoM6r8hhpdeCLJ4brFUvHNS8re6H66NDWkRCyMcDvZHsRmMubZzwS",
  "key16": "39uKYy6Jm7izKAWLSpprFJEBBzHCKxsMGfLyfDFhXQRNeLjaVigUdv9Ekfcqa2b12HpG1u3VTB15iKKRD7qFLUXN",
  "key17": "5kbhedz84k74hCL6nLMqGjAi8iGVQxdz3yzrVo3zr6w8sFqqK7gJXANTtPUtYVPZehUTLv3nq8AM3X7Lx8L25wr4",
  "key18": "5zPBieLRmn4SBy3kzfCjeUvDZnRnW6fpj5WwAidav8GU19m5edFwycRP8TiYQHyFny6FKnCRdPpZsawCsRJnvKHJ",
  "key19": "2SUXFYN5FEQT9u7i8qZupCoS8zKPYqbXmNP11WDVhv9HcKH1iDVaxbhWyUvWKdRE73rV51XgnSmEvLJ43QcPJiYR",
  "key20": "66Zv8YFgNBZPRFViRA9QpzQzhKXCFdGW3DeCnWsoHJewB8fQNWVKc5tp2Zby4yvmzthqWJk196LQfbRYba6Sn7az",
  "key21": "3TBDQXVNtGEs1isVMn52qtBztP1YPUJ2e5izL7fb89c8MzEHADmpW99My9ZH6feXpzMiEV1BDK8NxYJDvHyefr2r",
  "key22": "2ByHjKkwbk3A7DngrtQouWA4dBvAzyvg3hZ53v6NAx9WiELPA8mM8VtV3PgmYV3hmBAn9ASTVMnxHenvGmDwNMMS",
  "key23": "5F2XLqiBixEWscCMyh1Px8cFXg9ouGQABSE7RxZNUQGe9r1nhFmpWD7wsV9imR6dAGi1MRN8jxX4ddfsY7Nkxk6E",
  "key24": "2RyTWER2ePQn9dfmoNHWJLi4kWZLxG6fXZQqpDsZAHvuXAFQz3Lv29dWJ6pn9rtgWrMkzvTSXrCWwiwYfVhuxg37",
  "key25": "5irZY7jpem1yMCuQpPKLGAY8ZWhXSftyWoPsgkdD9tsNdhfEa1a3jrAt5v6Yxqtpiqpq67k6DSi35MyptFqf7Ys2",
  "key26": "5RfcHpWx9PRWG4o9msGDZnNgG8FWkmZdqB7AU2gT396ecNHusZbPK8RvDGBaGMPH91D6mE5deMrfqntADBCUMZJf",
  "key27": "qMS5vYqDpKxJwMLGyjhAWXZHsGSr1QLLvVoWEL15twFTv9qG689hbw4rimTcrSaqWb9tj6TcTeeX6bnMNgtHCEM",
  "key28": "4jvnvVJNFe1FuNV7UyapHpAMXv8c2CqGGN5CVkUEg6tiNvVr73pjHP5DyjVZztmzrwPaPKuZYSBUWoB3PjpZYHg6",
  "key29": "5kdqyiqMauE6gYxNZRRzrrSa9PtUGan2r5gYaK3Q9WoKyYnyepjvMTjK9XoqqbTed9ftB2f6s4HEGFgK9MS2nyUY",
  "key30": "2TC6fuVnfLwshQNvZJcfTXADVvohTUXSG9EACsq3ukt1hmyFSCPXP1QLbG2QrT4nSSsNHTNZFQeVeEgd3uYuGtmQ",
  "key31": "67Y7Q9sAXSC43ykRB7LpeupAdj7Ecb8FjBXLmBSRESzEsiNzgfYykVBTJxRgxLLxosCrEXbA51bZJvgGNubBGAzJ",
  "key32": "3wr1Tynh7UyKD9dZ5L3ALLXPoEDSn34gVsbSNU23N6jxx5fiRjLohVTVn2qXGkiAfNXNFwjJoayH1vBjS9x3ewKu",
  "key33": "iCCvC8rHFh85bSHFnjZJkGV1iYEtRtRS4pSjEwcsqngzfKfZcwumYhyx8deSZFs1qRb7toXPx86MMexddWmpnw6",
  "key34": "2sGP5y7gcEafsT7Lz2yzXe6QVhazaZC7xzjN1GHGv2ewQXVFzM2TNoC59pHd6ABqvnNKYd6e8sdkCQ9hnKPk5bV5",
  "key35": "RchpshWuKN6pAKPfeoRGhGVmJixboXPicppR6S7AvEGJp8558Gx391iuzdUkD6xWTMa6nFhN2sCadmdB2pkMgNT",
  "key36": "4gg5TArGmeq1DUkkH9385HF6j7pd13nmEM2vs7RDNCMANx8ysDJaLnpNsiRc2kP5rdSiXpjLQsjgcRk9o5b5DA4Q",
  "key37": "27dZ5JLffBsSN9cwqfFM75dG6GpQ46oUWaW5GsZJJyKf5s6MpanNVedJVH2xVBHmeRy56VDs4wnDvb8Ht8ZPbPw7",
  "key38": "2bAkHuKX4PsUeBasHK4hgdxMP9nuYC2jV6EA9ReXduEYmizrw4f4nbDtN7DNBpe7nafWvNZ8k3f8jkoJQPQwsTGz",
  "key39": "2qAJp3tpGQr7fBrb8wJD5NK6zyLN1AUxKWft2DEUroWsakcgqCYL9b6URYSLm1PxzeSsYbUGxmbF4Gqiv39DE1qW",
  "key40": "3SXEwmnSFizsHsx7ef8xBtZWVr1hpzKiV9tsyPHYGfSKjptXrLKsf6NmSHnBfLc7qexm4RMjZC1QmSqBVo7hS3D"
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
