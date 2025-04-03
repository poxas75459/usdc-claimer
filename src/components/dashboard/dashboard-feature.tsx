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
    "3JS81aCYUDBcH3t46qSen5G4MW1Gw1LDSdeXHA9oy2YpAdYCati3nABFVpYtzavWrj7CgSDtRYd5NedxiW3cFg1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTgJJR4RbagnphT79uybCXcBDZ1WHoxpkNsYNYoADbprQCpRS3Mhz8vcYf1T7NdPQZqXzCiJ52L9SRPMf6kvXZf",
  "key1": "2gFJvqCUv55TxMvuPDWgt6NLMW5DL5uMpVd6sDTUpNiHKQe2cE5zQ8fiZGZePH2NyC7sFG1uv4oN3ggbBorgVg2P",
  "key2": "5RYcpVBXDdfZTjUAGNF3jzhfsQMGqnD3FthEZR9dY5RDF6YWo8FvPKSRRMHksvxnZUrPdrgnREnW6cWn7kPTfiqb",
  "key3": "3CmqvxDsKwAqDHEHbh2Tr497rBt1pocHXAFAjrD7zkp1ytoGrVxsC3Ui3aGDVZUnMy5FNYUngzzbiTH3UPwR9VQS",
  "key4": "224B3LSk48NuHJkhVrcf9mQgAHGYo98Pacz5o1T3VPkdCiZ6MauR7wsvuPceoue4t2mPaQbNsc8eVa84kJ3EeeDJ",
  "key5": "oAbbcxKUZpayDyrCFeh7NYNGQCZK2FkPSWyQK3Mea5Hg8xxzhptGc1zw3fxoF3wjsrtdSjBJFHFfpwY3emNMfC8",
  "key6": "2TbE3ZwBedSWqPdWDuTuYGG5nrxSxi2KJWCsvHthsV9fUggJaykk188E1qi2KZTRDaUgXdVupKuJfGwB7VtMcyCs",
  "key7": "2m2RpmwYPtiW2GSfypZ1Vn6gfFnyK4McdrwdUCAubxbaRuNLmg7xNGeei2Q4TkBLBb3Dtug6eGUR9c4uAkVnPncf",
  "key8": "ExMxCUxjxnqkZ88UxTh8fSP5cNpLkDbM1Wj5AYcmCAWCXL7HmhqMDDmNbGSfjD9sUzbnS2CFNqcznbRkft2xwWw",
  "key9": "3ZvhM99vMZcWAP7KbDYAVsazXMpd1ZjpPbiB348tVeJdfX2PHu7Yc2ArzAdMjHXVwa2Wy5a8WP4xewAzXcMqMcSZ",
  "key10": "3j2W1pqyUMPhN2Bh4aYFo934Bv3Y8Ymdgs8etsYs33udbrYrocbs3YgtiwdSrj5zBoioDbAj29Qk1RMwFEuJmE8q",
  "key11": "2nYnhGQNbNoqyW3iFB8PVsY9aewcfSV1aUjecGqRJzQthUWNJk9CaGEtPE5yEAncRJLCmrdH5DCHeuTdRw3L9NFL",
  "key12": "5tRn5ZbMMsagC3ZUivZddFhzygcZgjvxXZ1KzQ5PK3mVQtJvU4hSUzJuLWRqzDGomLeEnMycJv3F47yUJj5eADBh",
  "key13": "PhGkcqNVQ6d94SV3ZFUvcg3TsUKyeSyxbAgRDaN7YpnYXRQZW2PPoagXCnpUQC3Aj3KXmN7z3X5agrmHv3B7AEA",
  "key14": "2KMrV2McYXv77UeeeDE72FZnpH3rucsUmU9bPffHuDHRamk2xi8CXoX5zft5sprgSUcrLLX8pBVz2ydVtK2Hy7Tz",
  "key15": "5LRfS9uAsFTqRTyQ4xa6EiMTUSVfrgKoEwK3ZA12E6EPKRPHafGHacRRU6pTE9BQattfxgRAx5AFYY6h8FC14338",
  "key16": "3wC6wKYEgBKaZVDnuSc6msBXfZfHqV3YTdjBUPfaEbaC4Znwb8nGc68VK7diQvWyLmymq8bhPKBD6u4BJnPfmjyj",
  "key17": "2dsQEDsoxnm4nXfD42VwYdTUGQNiP3RQkYMUBAuSxYPjMriVjWaM9BfvTgTRutAFu4ihRPrtCGs35VesQEukDpDU",
  "key18": "2jY9nW62AtVtD5dVSxBFqjPEykh4uXHN6g2PPnVLo3sWPz1MQ35HXnYciKcvEVzVxBK88ZPW1jKrkytoMnaZUQJN",
  "key19": "2giKa2PhvLahtrCFieJYnVek9YB9VHkimpH92SyAzvts6dvPT1Nx7DQcP33yxKjyf9xe8AAGUSbh1FP5zRdCPvL9",
  "key20": "4PQRkGScB5KKrNjqcnRN5DkdbMmpG1DDBCwhG7sXSV28xrvciaKFFXG2XULLJLZUMs6wxiWoeY4yGRUUMs9WknUX",
  "key21": "3m4SasfLpvwbyvA85mjrhq2U9oxcoZziMqYSD3Va9Lv4zcDnWKpV98jJAnbGB33HohtuKP56vBLicqCWP4DbD93N",
  "key22": "5SSnERzaoSbSDU2CshtJZSkfuFitmnN5wEDDXUYvaZzzKVHkGiA5NU5qfdwqniPAhVqdVaYMyX9wMaKbEiMeeeW9",
  "key23": "2cADR4hJaZf6oyBNezjWdbBRoFfYZ54B3tKvp7cLy9tjGwJ2kgnjfJkNTPhn3GjfkPmmnxBkGGLJXAa1j73VbqmG",
  "key24": "5QePoPC4wwxCoMTV4Z8NfCV15i2JS9yUyRp57oFaiEp5fJBAGYycJGo6UxE94uDLfzL98Li7o7hLznBfAghw9jkM",
  "key25": "2DdsiKpMR3rTrhPGWphta2ifBonHzkJvehbuT7UvA5rPnZjJRBqR1dodCQYSdoJuqXkvejkqQPuEh18L8smZ7YAg",
  "key26": "TZqKhFEKQBXZAHit1KbjdK2NfX6VoKLkjRoeDexGfCNreTNrzmz2oAm6iyU5Se7dmrwwMsXzYwpkFc5dnjVRHAc",
  "key27": "4nncaQjjgqQqPqDonRX7EjXAfGhV2qxuk4yD7dnVKrJWUrUfvVAFjbUkCBkSSsspehkoHxdwNLaofCCzXH8XXmse",
  "key28": "31pkkRfg3AXy9Zwfi3eTE8UBxRhvQxPkAtSJfkr5Eh2jC3ZYJcDTewJiVJLta3ezuHHs4hMKaYQ7srCDftTN13ku"
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
