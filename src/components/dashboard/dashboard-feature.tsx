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
    "3G8xCArZwhbVmrQaJT4SGpZzoRSVdaFDq7coLHtFwSEWqnUoW467NkRMx2SMLXYC5eUWKKhnQoWck1axATgHAPKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2esmgu76ryDY3ojM3VacS1R1DojdYsxt6fcmTyBB77Szd38BdCxpv29CSAWHay9hCRWXqWvi7CZCX3DKgYuzG97v",
  "key1": "v9Tk1pDLGYc8BvkzqkXZhkLkuQ7rhLYXtoP85yAB6nx26HpbXi4Zg6s3XPuhe8WLBZMeCbgSrBH7NdbpJn1cfkP",
  "key2": "2DdnjgVAZGrzKbjzqzU2NB1TavZQrPgBaAgRHVp3BA23NfcqGt48otyHvRcQJ9sPUQp2f5CwfHuwaXnra1opomA6",
  "key3": "3oAGpBosXpnDF3JyGL2cvGn4WRMQtG9vXfUNc8nHtNGLDKCeDKmfF9NBdru7drJCD2FjK9aMfGzm7mZseaqeyj5r",
  "key4": "5FTSg2dL563rwQsBHkoEM7bFfc9r6ADiEbii7DV13W3PcTRmvfKxACrXWDfE2umj1JCqEjEFh4aS9ubGvqLYfPbK",
  "key5": "2WJgZa2DYc7SKeTcacyii74MJwgczq3hJn85AD1FdfEkmztfqUR3FE4kqMAb33Rawug3drsGB6mVGaqNNxMfF7tG",
  "key6": "5bm6GAqAruyHmtikdVNeJfUvaas1AR3qT9q8i9cya34xu9RyjiBh4S9afbvxTjowV5qYPnVUUSoY4838fU2Jeykm",
  "key7": "ex8BECe5Ycmus5KGPgPp3rCZxDqRVgoUmcnDRZt7rtSuZ9CCH2M6aNecUHks3bsZ479hBDbgk9LupSYwCnKsuXw",
  "key8": "5v1e1Ex5ctvJkxxkw4coQCh7SbFo1MaQ9jCNXPuEu6jCxniPHPBMKJc91S72n8THPDbjNp35GNbm1Leo7u6JXtQf",
  "key9": "4BHkCBTw1kPpUpUp6kcbjN45jnn19bU25Wsp7p8fRBeTorDZgwxSS1PDWwuUs9o7oABwMBbw1G94AhrGy4kKN2AC",
  "key10": "5i85rXLPoWh416L4dfemTPp1tkQEbEiVMiwq7wS8qjNtoj7Nt4TK7fkA3qhyXDgGxdJbpfr4UyKqbEsiz8uwrzzw",
  "key11": "2KQdyWMQv9qz4ULdmUA3PtVZEXLWJv3qx2mJncwEDSxxPA5fHGZ7Z7NjyitSocxPuEwzppmTH2Aas3hrVT4LYGEb",
  "key12": "2noXyCYGmeAHoipZtnwvypv7jA1e9v7Ld6rFTKUxm3ZYo3yMCPeGB8JLsLKRweXfxByjgfzcrRfeWuVadcV8VQtU",
  "key13": "4iFd4jdRiH2SdQxw8MfoPvYHUrNQbjYpD5CZfxNU5yPEr8YpUPWoz2DTpj1ofpKrMXLUaRWpf7VAXomJCt9L9QzJ",
  "key14": "4z4risNFeU97wZqE2MEoVJNCPvw7CYoBg6mfyW9EvSPTg83M3XY6WCaM2gTRpYQtw1a1McveKpQ3frYSjV1r9QZE",
  "key15": "qKewrUkEJ2JkXNWZ6uaLkMSm6XVNwXwQAYc2C7ENJjWNNCH2Z2Vqv9NqAf4SBFdDDY3CPQgtmoNSPgnUyPt7smS",
  "key16": "4zEtGbQtjtPV58vyXG2NRPAK8cuEmVLjAgvitSc6XNJ2zZz81P9QNTkYuDp8rfFRJuD3LSd9oPKxcnQWUMVZWA1G",
  "key17": "3TRBKd6uDWujDRRzfR9zK66fdTNqrCo9SrTCnzTkPYGfFwExXLyqnpxrzzKaKU4jEU9NvxERaxoVvFLdSHpLdBmW",
  "key18": "62hKKQmqMw7iHWHVpmuY5C5wrbz87vQj7n6ZE4GWVShkRdT18TnseS4YfKNqH1e1y2m6gdfBGBZLewZfMJJ8SEX2",
  "key19": "2UeUEK6tMzsEQhFqLXmU4NqAXo6FEaokT1CkqoKgG1KQXrhjVKhSWZzf6izgbrUTM1jHwWoKbDYYW9bMERjib2u6",
  "key20": "21DpZfMGCRMZe4PEQaaeDPcnFxUhDF5nCfMeskXvVpFLiuNfq5ig7yG4LncFWCGhdmhskbq8pmoQP6oCqGQqwErr",
  "key21": "5WU3pkrX4QY9RBRE1qz3BVXkbuSHfF4fqzHm1sgw9eoLeKbPV53F6Ecv7VLdSpJ5Vcr2RCEn2W8fzWYLbY2HrHX6",
  "key22": "2HNKBWBz3NEFGtWGYGeJsX9goW6ZsUbcrEy9QzpAQ8ejXmUffkgvJmaHewmmygLUX7e769PYRgxqahEbR2HqymbC",
  "key23": "4rB3gqUCsTaJdSfmK8M7PMjHTH9zXtgUw8EXNnxD719mVStgqHGoAroLCiXkwugZwmgJpFCvB9cNy1JDJAQ3WcAj",
  "key24": "4zw26uhiRvv3L7p7HASGxsBLNScF63PZep6SE6cs8kjEWekenLszJbNDkCVR86VFVrwaviTZ3kxbGSAkkz79HpHd",
  "key25": "4H1aNH26vR3p7cE8cqV1doEyJkNYuu6xFa4DAsdzPiwsrhQ4k1VuJr1g4n9Gb1aEqYNQcqbSbd5petsBzhcTmj1R",
  "key26": "3oNkp9KWHQ7jvmcagMKtf7VdYxUaJ6MsATyQNtdjwLGAZP88X1aQBbhKSAy5wukdGaWG3hpoSwjPKWVfsDDp6iEd",
  "key27": "5b4zZShbh43WjUz9QXvKij6J8AmXJMcufw2YmeBDzByzLnsKKSfumPwf1P4hB6YQYUGatqo66oFERwn9QyPmkLi1"
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
