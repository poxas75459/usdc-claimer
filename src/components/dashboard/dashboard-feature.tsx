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
    "ycs828hs4QaESfSiEHd5pxvKw31CNjCrsz8UhJ7KHzHGsrJU7BQ5hkqvPMNJDjvrCncGR4KnhTAD46ivnReTnWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C9Kw1aHV68g2k6Br2MomYoajh8cWBQU8tWeLLZMueim2SpiR35hLJVnjTeH9K8agL6FZajMDJy2KYrjeafxWY5s",
  "key1": "ihk7dPBTxK78u2dpTJnmfxco2ixroDrLzJHERY8BDbzmgh9oAVqdB5NhAcmJPkm2RebXc5EPPaev93M8wYWBCQG",
  "key2": "91ZUQJLHJ9sZFhhbBVAXBqCzCacG9dRJaeHiC545z9nRVTgwLVNM7vmXkdfPES1PB2TsDRny8EiD2qmt2t3dUSe",
  "key3": "5x35ah81FNSoKmEXqi1ML5H4kjMf4oA4tkXChBEGmDeGTDAUNxAyuZzXTxda9h4fq2UK6JbpxLaYcN84noYLDs21",
  "key4": "2ajybzEA7yzpNarNStAykgr8NB4gwF2ZDPDbRcLwNgg42QHvWza2trvqTojVcnCAwZjP7y3CBCvDoRvsS4AyUUxM",
  "key5": "3bhhY4Gz8d15jiwR4SY7wBf2H5rWz9wRxpV3SHqjw1bTmRHd1cYfoF33VvPsJGiJUzUVm48Qh8FVm1ddRakiZW3J",
  "key6": "MjDe4PTKjyUtcNFuj9SQvJPAPERyStb9ZrPG1KVw93MM4VEQ4Hk8iDhHoYBf6S4NWBE1rseELD2FeE2hzvosGhL",
  "key7": "F5sTeiof9cMMJ8DyrBxA4FG3SL1kZfQYxVBJ6CPpUE6ZZPWpxnWapRZLq7SkpyUTXVAhw3dmjquXBZUADH4vmzF",
  "key8": "3jqR6YdcM9Le7f4h6BhLPV8PeqapZKm57n4afdjZrEmhuLhzeeKKnV2qWEvGVnp7ubXyvD9EgsUgxxCzSeCKP1Kv",
  "key9": "2UTwrVcGAPPwqq74o7Eu2jJ3ozP2NcGms8LYSreRCHLwrYTPc1Sd9WHNYQVQgb26JGHRnnxmsgocMCGzMg5iFhvG",
  "key10": "42ZYsEc6bbMAit1XimJH2sR8Kcx8CS1svn8WJZduyqWwKrPan3KszMybbXZ1k9YVhFySZPTQA2BLe3dwwSfqSn4U",
  "key11": "3EVHKS48TYKiMF5e865qHZs7sYVwqQhBwJrDtRYVKhnt9Th2XWykGJmgLtHJaNegkF5SY9oBMVLE9bPLyxuQ7RH9",
  "key12": "5zsK6iN36LMtoCT2mGUhQcaghutqXFfX7k46bR4D82rGZ3ABe85jdPSrBs4f1x86yZdQ9CaDM4eN85w472zqoapT",
  "key13": "2fP4XJPwYuuxUuahJ1dLrLcS8VNFYCtWMPNaj2WDT4cvapEzT7BMXczidt4r5nvk8xtY83acAFeQvFZMtCwXKonu",
  "key14": "37BAU1myvaeH1AAWXYzjo4gDExV9VQ5HVsr3khigKMg8kPkrKHMiZTr43ZgSddEGcfez5dkhT77QERG1c387ukar",
  "key15": "GaLg36qx72KMabusrHKBgeeB7isbTBFSzNEVkvEjZvoCrFvJnPAx6Sz9AkMBDPkqCdfwVnvVUJYUt2dUCL4vFcx",
  "key16": "28nYqNdWbUihDDudGKytXKUDjpcuZAgRw8xw1bpumugrjZzEYcKGzuv5yzKfbygwALLB2UfaFambt8kczPSTbFCi",
  "key17": "eEEc15ZQ2Eh6Exk11AAv4SbdGqY35ss3nEzBqh4iiqLurGH9E6CAZyqN3UmmSiZRW5W9sH6cDzuqFL9YCqHTAQV",
  "key18": "3ors7BdPPqgG4PRuVubh9KEtYkLAdftxWCt9Drji4y9M4shTkNoofpvdKM4kxKdsorh75L1XrqUFLRPWQRkFNhG",
  "key19": "GVs7ocq84ofhjFSRXQCeyBRx9Zwf9GL2to4fMnCKUmRye5puZcTWTiUkXqW5ZTYnEmbJDmDcBNjiyN4PP11cS5u",
  "key20": "u6zTYBtEaJMSVnfV9zZrdWZpmV6TMVtgW1c1QSr4iJyTYQL55sgFcgoRhTwzUfJ9Hf44ahLCggTNqoVEF1LY9TF",
  "key21": "3VYYYsw9v4Pi2JCNTDaQ7t9hAVVo3mAETQtusN3UEfpNHs9z5jRQ9GzEaFQnT1w6TFLVs1x2CQDdbDvd7W5SeuCs",
  "key22": "PmcZNY6V43YPts7ssaxjgR3pNFc9upu5RVxSfq7SbPcg5hnDoTbVKqByWw7dhcz9iWjVP6FrLFCU9SUYuTEUE8E",
  "key23": "YWkadJUWLso4LCUzcLTUUyg9PjymeHUt4yQXtvfy6rRjPG4oFYDkNs9JEneJg5s2RzKRyDunzwxTjbQJdoFqgmX",
  "key24": "2pyenqk3gaCDerP8EDwTLAvhYkoQEgZT6kHzJhGFKicsK7HutcYHfFHHhfq6iC16BVGxHyJhqXUuuv4B47QvMAGa",
  "key25": "37mK3o5XXz6DGC9cPqQcPo4QsoaERxGfmYuzwmprPVS9285NzZpGd4PdCqEpmj2Ppkgec26pUibfZamCjukFzACv",
  "key26": "4D2TG8BpKpgnaFecHhS5S3yjby45b7sYL6tj4Jn8y7PfdMqBkq5TKoMNmyzC9St4Fx1QgZLNQGyRmZjk9xUHqzgB",
  "key27": "3j7n5cY6ajR2x86AMNEovqsTdb3fexs5BZ4J9k9nxUV1HgwkHs9eth85ib3QLkfJS78YCNsxFE49qnuy8KWeSV4H",
  "key28": "4Lxja63oxtxbt2NChuDK262fdNbiEVAfcvwYoHZpnVKHdofTHmf9tfaEfGMbiGHQrwgRFemiaS9uqThEhD4Ss1MS",
  "key29": "BuhvEk7nNpyc8tLuriUC15xK7pqwbZVtZsAFTZHza4jPebqBxftyvHYGmqLduRqqL5nbEDUVnKnBUaLY3nvdFXj",
  "key30": "4uGniAGt2gMEn1NBTYHp8GutKaAiYv1M2piQHak4Krz1kB4Z7kCVNh9bLQQgHugwTDRrRemPMYZ6CRAvnfE2E5tA",
  "key31": "QvpFTNTpb55eyGf9opnLvoCRFZ3fvdcnCncULvP98UFtUzjUcW3YSap2tvMH9AeLEfdb5XQ5Z4jbRUYp6cqYDey",
  "key32": "3ikUt2cUzwyK6AJRNjjNVBSHvUcNGMTaAx3ZYgr4xjo3DMLunnceKRgm9WGxeoFCcHaanHKbSfFhWujw8vP5kg3d",
  "key33": "4xMUTE71TkPJpNJv6SxdKHtn1Sv7iiMgNBBertDny79zxkqijtkdFwoLyak8JzLMRy5d9Bkj1mniTnqZP1G2o5Aa",
  "key34": "qDrbpTan92brsj4sbAq3UR3pky5czHTnqbdK89RCbzW8iEX9XjpjH8bGf8QXpKjVKk2ERrzzADutyTFDJDeuGgp",
  "key35": "Sxo3JhEYMWraLqZjDsFMLyQtAN22vXAXUVtHcmfAFE7P8waNN3Aw4Mc9prGNdv9e9MgkvfMDgnt7eBUnZPAna9K",
  "key36": "33Pa6A1rm4DwXpPtsB3FZjFxTiBNxUdgvAjymPMkFFUqS8rxtm6vEcxSGKr4C3AFik9avQbCuMMGuHJtPxzdfPZ8",
  "key37": "4VLrxj7yyj8TNzZoSFJA3K1voXvhfsVDBSSKMWSTHwpqXuHAwf7pGmqkejaouR7Wad54BojmDgPYhNqpFcWHLP7a",
  "key38": "aiEbpAcBMy2KFBNqVbpD9fk1qwsvrw5jPttCWyA3Dzry6k6gG7UzHMZnHXc6sVcLr1mgWK7HCMAxWG6aPnJa23K",
  "key39": "o6oQC6J7rRvigwfH2VtKtZiBem4SYS5oD6SrGdo6ARyuYXuzLgrGKDuomrU9GifV8JHPg3eKSQveTczmZG5Yk3c",
  "key40": "4BwRpzgZRdsquiRt6ZnM4jBkeggp19s8b6uBG7UgHPDAuKx9DaswN9CTm1GjiqUcXeTgiicLXnS1tsTmkJnPc4eH"
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
