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
    "4ufNdoPPUrh3ush3K1Cfe1x37xQGtWsw31n9EQu7X4f68vPaUy2EvG3CJrYnHKGaPETvjUB4HwVHp5udXyJpoSA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKh9mmuAN1HPMUaFaa6qDzeAXQopGjd4yqhyfcQyxGQyHvX4Amd2iBmXYvghYPLJE4iRqrWV2JJpmxu9A9AoXbK",
  "key1": "3huSXbjV5cR7U4hwVzi6MHJVB5U4CLR5ydkeGWtrYiJ815QXHwZmLqDUx4tufN2ncWeKnKr2UAWrtonEUwK2nymo",
  "key2": "31R2DT5AmB9XBdBR5cBEh9fqWX5PSUyoraiiQYzbrXk6mD8Y8CmGqKHqFrMyo3WqihRGYyPc9dREtncxvc79yaR6",
  "key3": "2KeQxGfHphBMcDfeGHvBu4ZFUkRs2acbWBKCSSmyrE4WNEeDKAaj9ra7YcF7noP1GJ2fJdm9DpCmwbnexpHq91Xp",
  "key4": "5be4PTFJ8M4FtuMDvgQqS6DZSHjCmGDE85ZvSqpC5weVwEahyEU77BKSw5Da1YhtQsEoBdX13UYNTN8NcDYS5zUd",
  "key5": "VAPKbcopW2EPJRCtakaU3MyVPzs4juQogvzNie2kadFFfLfBMGtBNXzWL5FZFertWptSzn3p7fFAbmUkpszcopU",
  "key6": "34xxtwySdvUKue4mL9H3fDeGdN3jX3HUrmyfqb8sMmNQKfhqrUmKYpAEHjZFCkx4CZVH4UBgJpdVM9Dgm4sBwYpZ",
  "key7": "4MDKr8GZjjpR3CFcveDN6jogPhyxkYiHfKqn6jD8PenWMe66v1wdomY5P22gdScAfgFoyqjW9Jc9RCgVe9mhBmsS",
  "key8": "5pKQ1UMaAbViiuUJvngGCpXMCu9KcQdc4VbkNgWYazH9AMoE3pZAWnynwKRkrzbi5pCDTo4QyqA6cHVsd1JyhFJf",
  "key9": "XdR6EPfrW62jNYw4pwCee2g2iszYffqSmV614DzbXyX4Bfaea3oEy99XUo6AqqRHPLrxeeLQc2EPWAdpNZSxUDt",
  "key10": "Ey8gHa5AL1c6mVEP9RC82ksZa8C1FM7i5i1csFSdSu2sNjigLWjJKxWvMawMiBNjJeBvAqYc8STeTsRgRPgspCm",
  "key11": "koZkqvGinafFzTBU2Wok3QUzBoCnf8xytD8cbHnRyboM1RnRCxapkVsbrqaKHiDb2YWcmZRK5uyxxSkVnQYVMqt",
  "key12": "548uzTJta9z4Py61cKc9UjrGKM2H8U992GzHdRAU1kA8cSFtbgv2NX8WpMRGzBD1nyPoAjJMjAtNMNiiNnoKfodX",
  "key13": "AWiDSbKXcV8CXM8XeYrC8yPrik4TTaYn6TmpMGLVJCHT9fc2mEtFLhLBGuEhKg4jTC5TScigQJeUqoGmjoA3tQi",
  "key14": "26tSaL4E342G8NryUsQhN2Vvou947z3CnUiXRQDBqBJ1n4YcGqwaGShZjYwCuNEw3vEhdnD5EzemoPubN9SvDeLg",
  "key15": "4aWDMTBqNxF1jygSwJ43C7CL1oCj425KAWfwqqcxEFZzrj6AitjRMJgpTiKsmUpGd2jvGk48z2cGQAktiB5pEdVC",
  "key16": "5MyTQXZ5fD7Ms1MAKTDi7WkHX4va7HvcZdqUb56VMqMGKmv9m8ENpUUfBDaQkawLMMeqKXcvayu3rB46U6VG1Bmd",
  "key17": "7GK8o8DCwz7C3kUa2Tc6iQvxsquhFVsGivu4B5KYrCA9D7cjZhLA34s93pwdGaiTivu6Us9ohpmqu1UopaVwFpr",
  "key18": "4tyPuek2Z898t1aS4uxQB2mqh2SCHsX8cxsWLVPWJor7gBQgxQjZFv4hCWP7zFteKQtx8Z9YbsJabA9EdKmrb5He",
  "key19": "3NxMo4HTrq69eoqoYmgxa15PQXBrX7vi85SH5iZmaNT1kjaZAZEU8D1PWiHF6FBXt373GhGxcivHbHj36FUHRPMC",
  "key20": "4p7ZnCLKmG2jEAP5Fze8rspBEL3Xd8puHGGRBvyTNd14ufu7fPFxWC4K3fJ7FzmuPpmCjjnDR2MgUzdtBbsumUpC",
  "key21": "4gjx95gcuaqdcy5yMenUEmT8FQCHh4JZCiiSopHBAmLcFB6wNu26gLYmo5jqnYvhoSaWCevqBJGnzikcZLwXkduo",
  "key22": "4Za9hpPtJot7yB94nBso3X4b7NDHuUfp9TbwigGn4W9rSmbkRF1aXz1pcTMcBm9FxCqrhEbmywXUJ5g5BcxNEcju",
  "key23": "3BjvA3iYDs5hkWanXh5uq13UkuiLvAGB26h5RBqjH1kFMX49jpwTVuSb3EUA5GS5g6VdmDyDPEDzT9bKMGJ4x6bR",
  "key24": "55GvYoZPtGtzYQnas2xi6RCEwt6Hh6TLWVQo9ZoamQjwSQR9LDsDMYV3CSjeqhuq6SWpEqvJumeU3rVt5t8wnt6c",
  "key25": "64Ftjy7LFhC6XiiaTy4SLZRkgodhX33fCtD23jvc7W4okDBYniehNu3DqXKYHehC41wXpVScRYfKL6rLdDLhDSeK",
  "key26": "6Vf2r2Af8EBtuaggS3NmtGyQ94VeMJiAsLxMy8wxCdpFCwQtwrqGbJD8g2V2Gp6LkrYGrhGCQQmRsPKirsXXCuc",
  "key27": "63DxV4brvjc3aqTejEncpLe8wqShPPr8x2u3cMzwauXNpB4ZHUjGnWtt8BEDJvfiDhxSZsvH79YQR1z1PV2Bke9u",
  "key28": "3Q2DAbPaVY1MDrsFf7ayhhWxLA7j4HTEv5a4Dbnjp2VFFkMd88LqQhrXxAew3d5n81RqYYxcXccDQRo442g8K55v",
  "key29": "3F2isuuA6Xy9EWj7Mwtw8fr9jgkCEKXUxdmCwYeSipR3nnZR3Ekmw1cWinTnyGgoWzLqEvFN2FqVScGZtWtUMRGE",
  "key30": "nhn5NNonk28y2qKYUNF47wEwCH1CcVqrPZN7aXwSMSt3Ed2XHYxtcVemZGsXLbPU22UPMjqrpcJW4UfKQdVX6zg"
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
