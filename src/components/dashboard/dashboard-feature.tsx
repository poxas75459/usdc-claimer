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
    "2dLkvBeuZdPiJVw5egJA55sHNBdw1tu4si2u4EbVgkk5CyvAJyvqr8n49s91SaQPVPu3b5n8T3f9VPQyt5j5MD78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMKtmLdRNpZU5JWvrBRkRD2CdrJU3gDy73NeAU1pdpFNL36UUAu4c9YpbCudKPX4tjt8mxafz6H7XpJGMdAhVNZ",
  "key1": "2XaozX9HdinmsDBGtKMC6mmtY22WXFrDiTAeieEqSMajqRbAayBmFjP3g6hjDuLSUFPY1apuMCqPzYQ1FxEVMU7h",
  "key2": "4vdPngQD4cpoSfUV86fdCay2mBJBVUZMSEkevcdE8HB5UfEDdEYv41MgyTApBEGi4Gp4qxSt5CKZRAQfWpPF3WHd",
  "key3": "34EbD2NgX6tyXiwBKpC2jMKjK4FXTgupk9iWFwVbc6oUMAwqDxNKmfQCWcvuEfb6pbDthvw1ARHPvyuimLpsL8oq",
  "key4": "2XkegYTWqaA9su1wWGAkFezrMS8sNLonRegcPQMiKL78AZpefvKqGWMuBjt2VChz8RKmhJ3wD4RPnKzw5ZDaKvFu",
  "key5": "51uxU64dm485MiVfvnbEfeCdgaNH4NDBxuTyUQDPVFZ6sVgxHnUNsFQHT9dGJ6F8ebi7bjeZDvGXTWUL7oJaCcBv",
  "key6": "5ohtrb8X4u3rwhvSJyfkh7LuvCQSVggbGuafFUSZ51Uzeq49NmcXV6heC94A7p7U95bhPbPULYWrEgFZmjz8LBCR",
  "key7": "5X3SkXZZwSYcG9aKesXLJYot5THBbNe8h8ZbB6JHPpQH8SDD8VzqGcMDhSPtHi43MVMjjXxZfRDhEuDTgswJdgCg",
  "key8": "57AEG98qJRuqaF2tQCbnAn3FU29ki76PSc3RUfxTutVwwECDboYTG5nnRvJisQX5JqV37mGVMirmHWsmag9ac57L",
  "key9": "64GpcjPS3m6uLHkoffoMxHJQtnV9vVCoZwJwbrXh5WXKR13zPKxdwXccrFqvuRuiEBExxiFuu1qzLLUnNPj3QYfb",
  "key10": "2tPaFeE6AdAov6tdkrqB2cDWaE4sCJzan81qKJiZCDYoqt43fXM8AjWcioFrxZXREmaK5SAxwoY5fh6BKKa2kkbp",
  "key11": "3nrVGrmqbYY4nKow48YsUi4TWxuRUNpriT3M6W7WLHMsnJZTpF8HZzTF5mG9NenNhDxT57Lbh9T8iVDzAUrbd3RQ",
  "key12": "3VarfpoB4EEfH7JhCufYPichhaUPvSYRRLEThH8zN2u5qdtaWwzDBSmWA63q26d7vRWaK2oDPDqaS56D9rEm333T",
  "key13": "5SJYEy5y5sppTX9awDVbJRWEmMz2ssEEVmgeiSo5DV6hNeitLeeR8hzYqZUqyyN1PJCTXwRto3ECqHf2NnaL5WSE",
  "key14": "5etvp4wjjb51ZmmvPRyUM8X1HqJeRaxUKYBrWQNpUQBJ28VTKcJJhagPZ6VQH4qPacNXQQAvmDq1jjEM6zkFuMcQ",
  "key15": "4gn5Xn85CrwWNrDx2KdTZzG546KSP4S2q1PHq5KhrKGqSNXrywNcpwop1PKZxYqG876tgF4pFCoogoT6SebAcbXT",
  "key16": "4dJBoKahAXiDay6sbHVmHcyeDqjN7g16WRx5t7LMZdYyA8bDKHnKuRfv1nRQV9NTvarBTbd5h7Z4fcvMNSnCDzfC",
  "key17": "3seeB2UWRU7fiitqtMBgEdritP1FxTyZs4HMyq3VkU7V2bqUiKvZ7oGwbvY4ZXW7JhF58rVcu4917U4zmh78gQRu",
  "key18": "5LvKYdCaasuS14svhvKe2ykWwMevaVEpwo67nKgAu2Dxfv6vZtomWx6fgdFsL3iSXr4EnZWRXgrbVhHdCnNTLP9m",
  "key19": "2afq7He8LUVUAEyoZdZmovxrmGiAZFvedbc6647sRY6dfiuyXroZKfXVoHtsyPun3jxwGmu5UjnbiaXsYXiiynzi",
  "key20": "4X5zA95zZs5GDm9yNMoRHjXgWC5N5q9JsR13h9qp8xQRjzRX59cp3pdVMXSSDnEjY2UnvCdemZwMG5UPxwQHz18H",
  "key21": "2JjHMTu6H4TxkE9AEyjHj79ggqdK5DWtfW4Fub4AcSj9UVY6hySFCwa6j4LpupEVTg8GZmcKp2E6GpSvYeXJsSru",
  "key22": "xDMA9xwrsdB8NMAFUJyB95cjksxZ9o7HWYT9xLCAeEhYnehZ8ShLvGReyjVM3r1MWzmqynBajbrRPvfWhWSHKNn",
  "key23": "2yVP87h7JBuVRqcvCVkYbUkBqidm3nFJqgZ69139W9LG8Ln6pvkbQFAc6B2ubUg5bXADtRHxh2xSV6VBaHMsp18b",
  "key24": "4btgHdpWKt1gnwTzcudk8NGsX8Ao7dWTq2LNnRmEtvALCC1HQyNWt6X8SgDrzPvCSUkVpNZURmmRq6Gq4iAVtUPE",
  "key25": "2sP4MHWs2aMoeHBErESQ9iigmbgBo8vPkEToBCTvBojknx73wwdyUc1qNxocHM6uDpwgoC5e5kt3Zet3Pe3cqbDk",
  "key26": "4HxuV5UBgM3K9Wj4BuFneAbQ6pVad9TcknWUXpZF7asqzBo8uZMa7aZifRdohCPG8qDpWAyru3ATSP7pBBUPkcey",
  "key27": "64sVNqkC9KWz8uGis5Sniy2kwCvcxXwLAJpvdqrRZdbqPjmPPitojxihaAwkZ52oqzQVDNSTmY5riR3Xhi9X4a3M",
  "key28": "3FEE51ePvitSbuA1gYfKt434mCEbeBcoSpJBZB3aZGTCZrVRruZThYdy7JAouSi1HtazinT5eUgcnQCcSHGPXx4j",
  "key29": "2seMuM5yDKJabTYmFdFHJV8ZrgZxdTWQ1ye5UQTa88ZwXnXYHYZ9YmjBewL6Ehm4zG9fkQdaz99MrFD6gAzTrmmB",
  "key30": "55Jj7pNH8UeSHpR7NeeBWFqE8D87VVg3TZZABxU2B1XDezNpmpoN16EvNrs9n8AmutqxCLcxvkagpYdwPUefbuTJ",
  "key31": "32bN3UC19yeG9dqKy6jtCgPkUsaNFCQqKPfs8aq2UwLvx89cLNaMbFUuXrVCtsVLAdQozaivdK58bMEQAEKqbF7X",
  "key32": "e3pULE41216wq8FtupJApzWSeg3WY48qeW4XLnU7PKpdJRGTGcP5QscCvXozjWBVFtNnaB5UwJkCKKAjmnvg5DJ",
  "key33": "4LzhFbMt9L2PCyYXqfEZuPhZsPhW4Zsf1QQdm6VWZJZntTAt6nm5KE6btC9DGduUsrKL5wGGsi2e6mffsCx3HTpq",
  "key34": "4UBGrCNZZ4T3dBATgT29Fuiue3KRBL4NbA4KfMniFoGKa3mFukbGbhx3Q1T1eyWzRprdZNxdkMRXzaE6PgqyM1Rd",
  "key35": "4ANxFK1FT3p3HjKaZup98XQRVLjWj51gc1iPSGbHRxroruT3Qs9vPkRDZN73gm9bL7LnE3EFh5Fojbjeakgo9fvv",
  "key36": "3JvtG74W8JwjziLT6vWdFaJvbN6qVJqQxdEWoZJtEJWseyak6NnLyVN5kg1KLyD1o8s7z3ZsXM84HSUNNoP6PaWo",
  "key37": "3eCV78T6GNrDo1iAyTDbrf9bLhdfYDQhxfNN98MW7BmNJhnaJe8yticHYJLm7SmGuciqFqmiGsgmxX7fFVB3youQ",
  "key38": "2BgBjtDqRJNnHGme4tMcTXGvhpRNo5Pse5UetnffMm25MpQw98Po4rUytSHY843kgd3nTxbwYHjYxMk2Hmi7MSn2",
  "key39": "4pjHHVe8REqq19Yg2YmzsX28KZxqBiTDFvJVCk9LeJCrwRSGRx4g71zwgjAM2keWQj428GPKoCm24EJwCUCt7pCo"
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
