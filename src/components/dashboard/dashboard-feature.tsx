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
    "26hJVd3usqkchPibxtuJdVQJUYqbsfKdpaVUc9fFrrmDufZnjyQzRASmPCHNYD7oCXY53tW3NjuAjWrddtM8No6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDR7bQcmhC83HH93Sr8pX9YWyjaJgHQBAHDtumw4XUTu4oKezPkxRywqkS98uw9dkEgAJQttnTDJh75YQ5wx6fE",
  "key1": "2QfjWGbkC3JxhCFJ21AZUdGqwnpN5QxzUZJx4h7nixcYaVeYeVVpsZYQWfceQJhAwcfCmeZ2k5PTLydcWwetN4Jf",
  "key2": "5uRCEm8MVd3Ar5hDXs6NnXkvKH2r1hnXiepNnsnSoG4p66gBBovSpgmUiZ641Sc2FWVTqYp3uRREBhq7SB3c8zGP",
  "key3": "43YW2FmMSXB2iq8XnA2WmjJpvy5AtXyWon4nmJLYYkBZheVKVWH7xvRn7fE4ztVVyaPXvBrvxYZrZQbgsD138s4G",
  "key4": "3Rk4A8WQyPdJaivEn9Tos619s59obXpkrbsB88VGvkXDX6BA9eRdtS8xvwz3iC72nedK6xUHfo1a6QGr1RFE3W45",
  "key5": "3BDCCCTwQnYm375oz6jGvcN8wjKg6RVuEjb8WtVJZFeu7PhWt418gs7isVaHLeqspGZFGZuzvKVbRU2AgUgtEmhM",
  "key6": "3L6AmNsU8CjghLkWYyFkcAeRGuBJxVKZgYG47QUYmJ4H49QiUv1p2XkDEePG25Deq1syWsH7jNv3AEXaXK2pn7c5",
  "key7": "h1GkKqZEzAC81V3tKA2uZm8JvkHV4SGT4LgtRyybqJq5aP4P9zfTwMGQ8cbbkr5Jj1cia1AAQettoA65czyd26w",
  "key8": "2Rc6aas7doakbwCE53FnQneaXSpSPTmcU9fVeSbjQqy2W6sqptfKt3iEjd9iPkpTqs1Pr9anK66Sm9vLtWPnEBW4",
  "key9": "2ooUK3aCfZzo5Fx3XpyKCWmMCSVW6RqmuBB9QH4GRTj47V1tf9RvKniPucCGmMbq7qFhu8Gmqeu724BhiwTpbPbJ",
  "key10": "3Ycow5K4bEmcCctFQ4LbnZUnFx7JZ6DFSa217m2TScWCw7pAtGK7binPTd32QVf6Ke5HFmbqTUxHDww2kQuK3Wvk",
  "key11": "56wRdx1ZPLAX1czSLipD47bkS2UFGEWCpB9Bx1enCUjSugJDqQaztXAnvsCovAsUHgxgH1B7CaWmgJSDMvhh197w",
  "key12": "nn2raSwuhyMrDwdNbozjWxsQ5qJSwU7UzD34okbZwVYVjjAD6T7MaHYPdcoePRsWq7SyXcy8gi1TowJymcTJv6v",
  "key13": "3HMXXWMthVTNJdkVcpGQKCxdgXevUq2ScdAJFkfUcya4o8Tug4SPkrQCaXZB834QDCu2CooiE9GMsQfT4EWce95x",
  "key14": "42CVPtXiNkMGaBpbyJBx8qs1qu57oXUayySQ1XEMTRKtwUb1CxvByUrd1gELJmEakxDbmcmGDVtcjN96wbm3Lx7U",
  "key15": "4ZC88CsE4FEiPHvyWbfNJzfCDv2P8jrPDb76qFGE5q65jL8uULXwFKPH68JuF2T85CEW88kWCDHF3tU1HRuryaaV",
  "key16": "3U11g7L4aXrwoPkdX6cvE2kt2UuYC6FCXTiDpYoPj6fvvNqHWVpnygtgzmdyQT8ksXP5wmGVD3mDFPWfxMH3hwV9",
  "key17": "3o4VU9aD21T7AsSqRR9uFNWxMpeVTdjQ4Vm22X9Acw57Gvg93sRyNPpc34txL8BuuTGYg3iLjW4nDF5bvBTPGjUV",
  "key18": "5DvoLF1fHgZDxmTYYdpDqaoPkgpWHJ6hUjoSL5RFEjhYyAvoaEnaLvY9A1ioEJKRocbcesp61C4EW4GDZsB1YWdm",
  "key19": "5qHX85dxZLTRLFd9VZp1X3fJqWjanQRUEL5afGGJvgC9QYyBTswWUj4tXe2K6XTyUg55ehZDVyG4NADmWeW2HSpv",
  "key20": "cgdEf4CrZAJtvWTpajF3fDRRizgqb7U8TUr6ecowCZv89ExCAHJbyJzB4TjcSevNVnfgh2hbh33ZAN1wifmMgT7",
  "key21": "2GUa9vbmpwkaXeWkM74GV6tLEGJymcsQRPPRZDXAU27uqGXSyZtnMVXUnsEhckryio9ze21TZkBPQSctHChodN5V",
  "key22": "34QRgScFuA6a5DuiLeVYPyKxVhewzmEYfM5454enUu95u5XqJFCPjuiq1yGKGyqk1897ojsW6jJzWrRBPfQ6SFfX",
  "key23": "3KBD4UoqkV8RSo3GAXy6GybqeVvBgzuucz2vKLhGeLJQUADSBfdU1SdmQarg11kXsMv5vCmoZcKNgCifvJykBZHm",
  "key24": "58Dx6Xk616woMdgFtiijTX7ryWWLUdA6BPC3mxEYqXffdsx6sK94jHWt7m3zXimZi2EHo16poSpG5iGtTSaygW9u",
  "key25": "3dewyB6GC3N6rsgGWuFRUJgkHo4oT2Yo9qMsTpj8JWjqsB45hY8jaFQMKetybHH2eFhJj9WjqivEqQm2MyWJCeQd",
  "key26": "33FyAmXUdAmJqf6RXo7bb5C5LYiZCBLRgX1EuvQi1L3fbtuJNg71n1knrvwNgxsCSihvGRVMzWGHAs8uLzWbcuGV",
  "key27": "1j4TKNqvyF9jVVX5SdzgApBqbXdfUnjqR9c2kmnUGx1kTbc6PFpDUbsLKp2BX2wnbY8meLEzLKwxSootPB2hFLg",
  "key28": "pLKRoqYdKGScKU8EVrdENuurVeXRNxELLePtFaiX5NHoxBaNXhiD1whgfRvH6K7rkrsrtixWTyhB4kvSeKcR8qU",
  "key29": "3zRzKgJzpmCCa7xB8a4oPd8SPGZnuhKoUAs5JE7qKzHVF4hveJyhH69j3c6iETshAYEnJpPmdgc7f8YnzvLDfctp",
  "key30": "XF5J7WPikzLeMnLAnFPpuTVn1jQKVYkxGuxj7hWeh5oTBV2dd3zhaxisEZGPDq2hMYi1gy21MXZd4TL6LQv7nBr",
  "key31": "4XEibxQ48hzRy2Y9FyfFnB5gegtv8V9A5xva7ZNLexqibXAF1btob8i3w2Dvv1p5VE14DQcKkdAtFCRAaMXuyytP",
  "key32": "26hY5MG35NGPWvQkNPz6xihr9ykveJLvsEAwzndc1Wt6L16iPwXg5uDRNnw8xPKVgTmxWK53jJku1r3JWfmWMarc",
  "key33": "4PwEbQEzJ4b6ByDuo1He6PGFE7vXeCUU64Qh56STd7bB5dfEXPm6fTRqvMYpNa67hwhWqhu1QwQLGbpdLsEokhHK"
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
