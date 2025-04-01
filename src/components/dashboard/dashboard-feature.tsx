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
    "4m646zM4iZoj8z2VXn24crakwskhaYxDMnpYqpFT1TkxcM9NLi1B65sH6XpDMsjVgSoEaMwLXmThot2cuoU7wxCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ogH1EJSnMM8PyLot7vmcjB2HhwNEnkYSbhDXZ6Ln4xprFkDwWXKNiAxodwtEuRvx8hxCy4WJKSXRKzgausYdPav",
  "key1": "5Qnhpr1S7Rpw6VcaNH2qnhC7uDMX3EbPVtPY9Ks2bzP1r5roYN8PqsW8N1pztvwYr4NyDKY6AVswxiC8w7uyEwTd",
  "key2": "3W6NZvTfdUHcrrJtTn7n1bcAgMrhc21nxfsPv31mufyJ4JzAYFPBZZVa8qEkpkEQ6Kq5xiZHYcWfKfEsUvCaFG5p",
  "key3": "5XZtDbm5JrdCsCQX2U3vnpsUJ2e4nmXEE4sjNiuUYgsiJnKZEdoa4TKdMCLC6qCmLJJwgYwG4jHnNuqhPhFmV3Pi",
  "key4": "37Ab6bet9EC78wdnMK7LupUmJ2Lxw6gZG4B4CZtZaG3czhFPBo5QnA7JdEHY8za2JoFGCSrEbmkgSZ4KijWL3u6d",
  "key5": "sHcorVZnNLvPTJh2pLhV9w8ZBj6qWA8GvVxWmFtTgarb8FGuGiBxy53i4Eodxd9kG6sLdHqr6Div1JTL8TyTXPn",
  "key6": "5k1DmnNYoYhGdBa5w2UEYwhVQczEHzFn6e31TsiBUAUu83ASTGLh1zdGn1gDLpHGGRmANWX8TSxLkjQvyQZm4upQ",
  "key7": "5V4YHznCFDTaN45eKYfUY6zF2b1XcanRAgXsZaJpD3i1gkXiVH2iEELiRy5kbAzmbfWpnScqw8vEWqU4KcrxtGiD",
  "key8": "5KEd1B2DHCB9wfDH9MiDRCiyDCFfzW94hrY26HTpeRUf3BXmfBjGEzTPMznbiytDEnwk8H14YPHqn8aLtwxqxEeK",
  "key9": "31yPBnh7JjFc58MaRrVy6ffrARRnprt4anKPz82Bx3HEFn571qKeqFg7meiC6jWp9kATm5fqgRbAVu66Z3cvvSdN",
  "key10": "tCuYmKyySQ1Rdo3HU4Vkxi8bPMsM7kM7t545oBS3QWLVq3JaxC92n7znrhmySW6CEX2wyqeAbaL2YYcxnbyFwGH",
  "key11": "4uiBFSfwBCQon84S6y1GGj4sRPHDZ4zfd3evqLNiot8UFRCWTZ1V7UzzWRyXN9RaWiNS13trB1q3Gxq8H9zY9Eb1",
  "key12": "jN1nPDstcC3tdRN4nswdWFhP5uw3kFDpw1AGKJ5ZXPtujbPai9J4kM6Y5c5Kx6Ceevov2YCKo6tHjFEZKYPoqiL",
  "key13": "497tKK5pSiuYED6kG17LY73TiPnWK3jFToeGNoTECLZBmQ2M4GY2Q3UgzwZMMLfzui9zqKaDrz5ceEmLLXsQ4mRo",
  "key14": "3JwXA66poM948ND24HxbrzpceEbwPswW99k6LSTrq4aK8goGk6dZDyx7xG1wNNjoYqQniPNtDbg9bHMu5D7Mvj4G",
  "key15": "4489uxoMFoCYYpfN8h82GZZPTD7xPmvBYQJZqBhJpHXvCY88d9h8vd4tm83CGFgtyDM5NttjkYRQw9nUtRwegJHP",
  "key16": "3n276asFAomLQ2pNoYfALNmDU9wT2Ch8YhjTEyBt1uKfx6zG3b8pyqTnZBf42ZS4EgfWZSRr7nFFC5mNutLWTEeY",
  "key17": "37bSaqMvVmjHJR9YWhXSk3FRpcLYuTtpQu5aVM2cK87YwacUMZJjNjJMqrbVwRZwAH9ozhKa9P1KgSuZSTkhXDw9",
  "key18": "5uXaF763iWj451zYSuyFhYY111PCeCCokNBWGq1P5xtZnmj5pMdk4FauMczUDMBzzVqt2tkNZ7w4GHyYgQ9KkgGf",
  "key19": "21BX3UK7UPu7b7WUvCJKE8qj457BwYT1Ph1XmcVioDxtbbmPq554qGR7skBHyV5FxLm1vftts3MT1aKGqFzpBwhQ",
  "key20": "5JCx3fyRMTHcwePCRTf4p7pXEKYDJ52N7NdhpP971gDFifqeL4VzxuHgtMgxzRDsACAMrCZJRYThDTfQ76Xp3LPE",
  "key21": "2jwd8v3ci8BzEKKv36McB7GfEbHYsoVAyJHCm4gQpNHGukZdVVheJkfN9kqgyyiyKdUHEDbtXdCMPLLoZ83SAGhV",
  "key22": "2wnEppzKDHT2ttDjE5HcEzC59jzd8LdvwVQTdhBzS8UcaPqyFe3Z8RxEyjNhTzmk1DweuuD2AFAUrNNauivdSpEG",
  "key23": "5Ln21B5WEuJu4ctmzSNYxNfemgdn92qCi1i6mreA9UTQQYnVSvpnMh6VVh9Do5wdD15hp4zYfSovNqqirP9QQaMz",
  "key24": "2rYS2Aowd3nohX6kLP53QhnhWeK1ohUrCUZ322MzYvdxonxSJ4GnLcZLxFyYudcnhC13hU2etbL6F8AhJGy1jS2b",
  "key25": "354R5yCndxTjJfuxWfeDxG9gvMbDz1QLijvtKmHJWjodxUVgUZNr9KYyUU2md3k5dCyN5T4MxctnrB2GXZPSHmrn",
  "key26": "bv6jeSmVxNQP7kcwDne1H8AsWKkhTZ9Uq52no9qxxyWkTQwPQScsZxCH5BjFMahRGDMymVedeoFccE6GqPffmAe"
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
