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
    "3TmLLmG3GFkytATNe13TFaP8DXCFYsTBdAQtUvPQdQjqtQqFYtDtkCLiZLegEtgH1o4GxCS6dRAHSLYQWL5d9Qay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xXE4BCvMVzEfK7BVpuir9NYTazcvQ8kidzshHG1s7LZxXFUWEP4sxH7i7TKSKCkgyNTkgPW6KaHzabrZ3iBBm4B",
  "key1": "4Au14WmhqmHrqf27XrK4WJFSee1uTYaatL9U35EjLPRgp1oyNH8ypMfJT181C8jcSw28RefGGBRyWKGphBQ81GNT",
  "key2": "3dRTfbHv9Eezcm85cxANDKSCLPbLcVWEiox3PFEazPj5A8K6U7PSH6VQc74HBS1FGJ1vVB5AVDH68JwVV2sWKbUD",
  "key3": "2UQPx9JGS5nKBCoMCKS41LhKruemaxqp8DFgWa31K6PnR99Gee8qb8H1kitRF3jcpgQRkSUmJ3EmoV2QonfQFyGH",
  "key4": "inbBE3oaqqXUEH9cNm6YnKJMBefLa79jQa2M6ZuUi6EfZ7vFfqxBCbg77p1gKd7jLEdBRmT1r8StKz65WUcfHxi",
  "key5": "3cXED6EuH8VHH1Vfwg41dPt4QUuTrBujMwnhPCC16SW5SuZCqwmu1xPGdc9rmaLJSryvz67y7opFQVLBB8nVbspX",
  "key6": "3f8Rkk9ifR84SvRQf471W3QXGjEvm3AewprHyVeiwNQx4Fp8LXTVSMT5mBdkrU1JQwipyiWyJJs2ZvDUoa2VdgJv",
  "key7": "fNKQ6xRntze53CACSgue4BonKicpiiaCs6MKG2124o95xNsr11QvxDokphannaHPK3Tbb3a7QQc1ZUbBg1jB2n1",
  "key8": "5wCNp6ix7p4qVCtctuEUXSbef6E11yKsGaXnUJX3ARJxieLWLQtSjE8dR5uEQZtCdh9HahT8TSXS4ipjUjggZwDj",
  "key9": "5an1VPY8P39hCJwTK8Nugsiq7LhcwtYCQaZrWGbdq6q2cMUADnymbGCEiBnKRdattV1qPd4DSJ2GWhw62nzLVuLx",
  "key10": "4CshdFHYEGi47vDX2KNVHugkKVee1Ssd8ERE34Wi4JMdQmDuo1LdVYkxuHD2E1419Z7yMokcqNBEb9Gg3eqkGgiR",
  "key11": "DFsGA5BvL7vVhvB7cVHVEjyGUaAf4QMysY569oodTQtxHxGvvRpQsM9pAPRU3GSfKkzFYcpuXDfTSShRT1PGMyq",
  "key12": "5NpH1s8L6aSt9wrgCCEn8PtV4grhWtHWiTFgugpLW6yEk698RJQTYN6jmJLUyJ9DTMtJfWFyqqii76uHMeuuBtGw",
  "key13": "peRCvEVEx7SPryQyaEaiBBxqseV8ZAbmPnE2fy7izc1DxFNyY3PguyPiqrJgM4d6fFuyZbkdSaxvMGwLkFRCuiq",
  "key14": "4b2uqUByoiJKvqMwDAQ2MDvkD9avzWWGWRcoLfsKTebSqsjtTrpfqqRn1C5pQ5SjEFWxRp7quRBruFGu9oWwzjyT",
  "key15": "kudJCFS5s4rnC1ogqKXVDkUbb7ymakWgxaQdXv9n7stC2CGqLrWCLvCLAJ6w5MmTT3MRBYdKH3rE46TmEyYHKU7",
  "key16": "5FozGgz4qjJ85QUcAeinFBurMrjAmczeQBkapcPMzg4oqREF2Hzowv5H8WpCBnSwj3Te93crJpJ7s2ENZGeXxJZD",
  "key17": "53LrNYXHeJRwNJAmvfCfJzdY2vah3qsGSeSsgMn6RWrGrKMR4XJFjHKfVn8JW97FYEh6ChhBbaPoXiPH6jhHn4GV",
  "key18": "cuRyt3dXQL9ugNUYfqTdjgMmxNNsbZDUXGs8QSsjW7cvQdN3yTDVEVk93NgmAr74vXxq4Qrr3oYC1kdKoq1QQSb",
  "key19": "3aUgL1XrcH2q6DB9GxBTSNurg7TP26XNrR2fPGFEGPNysF82yG6ytcEtrAmeqh4GtuFw9CutEyhv2Zn9jVhxNSXn",
  "key20": "seNC83SMrq2yxBX6e68oFXN92UrYQPMio9m1YygxVQ4tntkAKPFuafiZgiANAkFuFbQ4qhxe8en4a45BHB4ekPr",
  "key21": "43FmBMCu4DwGVpyoxUEm5HkZ3cj1t2F3m5rwoVu7dui5ju2ZafvpDskMT4PKMEuHKXUp3NaUoH9cEFCbEcQzZg7N",
  "key22": "32U9SQbq7R1RWJSqgUeLm9n26W6AKBdnTP1bbFFrgRta32MK5esGKQ9oeFTdQeztfJkotZy4sHe36q3TxSuKfPBQ",
  "key23": "2aacHYAkvg5kdKTNtTZjf7m7kr453jT4T6M4EDyqibnRceeNsQRehbyPRs1LZuMm4PtAkwrtD463D6BFSDmTpywT",
  "key24": "2kh5XQAMPP6pGGPpMH8RHKDFmmhnav6Gt2QgZu85zM1s9PUhNxn8zja1tHbN2zVPq6MeaqYotcDHuwoVixsS1oXQ",
  "key25": "3gBcRHYdgmD5H3R3VL8waEyA74ig7JZi5en7jDWpEAv8pMAn5JCSBYqgdh4886EkjN8SiARsEkizKjBhWvdADwMY",
  "key26": "4UtmcWY4QNgNtJXWPtdaKwMJM3NqtuvbJ49higBhJhDANRHD7JYv1zhZPyvUA2ube8Exvr5YmEd6uVsXx8VMpmpY",
  "key27": "5oLLgJtYid24rLjXwp3h3AnkAYtLfB1QpcDx48Gx2iJhsdQZhTGrScKavNGDz2pCvR4VkrQT7oJT618qNp7ZMeXv",
  "key28": "4BmGjrtYSx4FSUXPETarHA8XZnw9dgnCM2dzQtxY1QnWiwPukgm2Td4FoxeLn2AdeQxfP2L7R2TLFw2SRmnjEpQ3",
  "key29": "3ZmqXRengsmnfnE9r4DprKm2tegeHJ8HHqL6wDNhsfGLykcinNh7uWAPeqwkpgB75Kpt44qFJfLe4C4pKv86Z1vV",
  "key30": "4SDg3zL7ELwULsM5MebnjAAzz5Lgs2AtnCJ5QKzcdkgBfJ7enGmxFiCv8jrm4GSHDMguSt3mpCTeRHA1YuuSdXVi"
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
