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
    "4vBMGioP8fPSW22gBZPDUpa2dBN3zbQW9uN5xef4P3U9Cp9ag4MW6K7kXYqJDBjEEHd3moY4pVeZ5vuVbcVajQFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tn4Qjy432DT7Pp8b2pK1aJqPYDgqFmowimKHUREb4Lb8WpDsdJQo8JTG34txymoTGYHEFtL73AWqBK3cScKFVb8",
  "key1": "33XXGwKx6taJmc61363aaHsPFDZAyR2E7Bgho3qnMZ9cKqwdVWZMEZUmYuwx95jgd74dh1WWRSFTPKFgw6TqMJQe",
  "key2": "5Ekj4jsYCvdYebDTxDgHWWenZAapGAc4FBE25DHwCQ4DKsyQ632QCNwb5r6jd5mSZ67iD8GMUKojgKTDNwTNUD89",
  "key3": "tw1zFH55dXW32uuTfEvhSkTTzvCxTzAeQdU3aKKmTiw3QpqyTcEwNUspngZ7NP4MgPXFu5TmnzFGyXWSt5kUoBY",
  "key4": "5fpYEwcMLquzXULiK95pprVMjVoY1pJEQAS5wUnYMAuzA2NKwh6zWh6y2paz5xQxH7m7rbmVh3UQ6NPAdrS9YxEh",
  "key5": "567SW4uAKSSzDkV7zy33aGbak68hxEpowsNXRGpashNkZ4LebVZKRH5hYjg4VUZaJWnvEdGi6YqqTiyoBrFkx95e",
  "key6": "4YVeSQ7KJKb3NgSrE9rSmYPXYFzYKj7jpmfsyPkYjDUgf4UzyeLSyGKMahrRgvRTXUeBuPGJ88ckm8BnBTD7PjEx",
  "key7": "5sp2S4PNTe3daAq5w23MYxZsPkEUMH9gzUsTrZgMxznqx6rDms4Co5DoKwemFwVXEUGn31ueNX6AjZS8tfwtznhw",
  "key8": "2MuMiCRZDEzYFEAXLFeujvihtMC2d89Kahz1vQqrdw54AjTNSZQYqNvmDUNUzgge5hU7DnZKXVnxogc1A2rzy8dB",
  "key9": "2jmPhN9j5DQCgZAfEKmUibKdPzcg9NcadDQ7w4DMv973UxHnFoo2jq1e8zYUqw1qmY5G9PHnp68GNsfLUcm45bKH",
  "key10": "2Um7Q1mtY1mn6VXtdwJEPuBTem9TUr7PdVRpT2vJmZSPfLA1CGwp2F3fTreUeQetD2C3U6zaYyMSVimmpc9gpoSb",
  "key11": "Aje92gLwnCgZn7QeP1cyyxszEsHTTKgaw9gZ8MvyPQ3uvF2uQJnNsARFK4po2DAtec9ewgQ6bcQoARC2D1TeVkz",
  "key12": "2UWdFwVCHuHoycwCRx4i8nsxn9ZTn2rTBh17pKLRygyjocJwsfsWqhXfcGQZATC3muvhyzSYi7FsynHvmj16hGpT",
  "key13": "53UYUJ63UZXKdLR1K8k1SMCFTTU2urqjdrFDodoPrn1j2uNEfenrBu5MT6Mm4h53AkxMhKugvFBq2BD3MTpo6RaM",
  "key14": "gERJ2W6LXcs4KXHYtGHtpBxYxQFE3V7t4fnAh5GRqhambf3Ef2uegWkdDsn3JikTrg4wPScvWjsNDAyaYCxBv3U",
  "key15": "5exv3uZzemFB82NcoWbtQaz2bBkF4AZCdKDSHggi9AnDvE4SpSE9GVXRNN2LB5yiu1GMhQHggKfga3xRT74narzA",
  "key16": "3TfxMPDNyr3rNqDwgDUYgf3LQDeA7snekJNALregj6KZXdzk3oBh4WRWVcH7XBPoycjNt8ykYiHFFSKBRuzF1jM9",
  "key17": "5PGe7pkN7udw9zSGSgQn7FkRsHMXjXnFjjxVjTHArZcUDVrMRTY3EuRcEiH66o5dXfUSZyouPbYt6Su98HgrMbnb",
  "key18": "2m6TvKpgVFoafX7vwhj351WLeNvGCQRETkMdKQrHeo3RcmWRwZxRhS6E2AzNvC4QDZhukUZiktdKE8LAsxApHhEd",
  "key19": "aYVwKJ5Vr46rsqJUh5cWURfRfbeS1npQLX6KPxQkQ43cZ5da3B3t8hDjssDEqPn2SC45geUAz9yGCg7supi5w6Y",
  "key20": "2HNKv17yGgDKyah3NQoEuJkDbjESMreoTsHDyHzCbVXj1HrSs1nLk2ido4EFhGzqAa3c8EPZtXzxzXzreiLYFpfm",
  "key21": "3Nmm2MGrg5WiVG9zs8aSyj45bZNg61NUUuL24CsooMGPEf7njTh3t87ro4zpfTA4aoHat3UGgXSmGcDrp1YiHF1g",
  "key22": "2VeAcNUtB1FRCCCxxTFnfe8CytvEFZ9aCj9EBPSKKJp7C28ZRLNaJmTnKr93nUK41W8tsdSzMiCbvcRjPLhGVYiT",
  "key23": "5P3ad8pod3F6Vf36vV3ZnJ966noRnz1VggtnEiwZhavE9TstqV3juiXgTmXcN1GYAFjVq2aTsxP24YVMEEuRtsNq",
  "key24": "3e4334HWCVquVfD7B1kgh3Sbe59r251cFohAYQfv3hY6cWombE6xqFGEZgWVFWTwoHYkEx4anvMkkb3djWniProN",
  "key25": "54rEFAEsH6i11eL3HU3wQwXgSQ5hqt8EsE98AuRy2XUVgDGgVLy2wQ29ennB4cpirS3a2PqoyGkeqp7qs4pX9NVa",
  "key26": "3eYSdTbwjtuEaLcdCGqQHyxd4WU3Jd8g2ByZNzYmhpNUDjyQfMuSvyTkX9TDg3WGSJ44ahmrvaF6nxwzt98MpVgu",
  "key27": "3ekoLp2iDjS6XZ5mtFZScaynggRZsgGNwZSCZYF8XRnhXAbj854oY6u4sjgJndJbw6zGG1EkQoMaMfbuYQafHHcS",
  "key28": "27tmma9b2Fw3atj8q5entN3eePr4kuvvr473H3ZSEYFGn4bAgsez1trYkGp6pp7Da4fvjWeVTm9Ncje1bxosbwio",
  "key29": "2bu4qfQb8Qyvcmz3x5oDFVeBRdKfMNBzaBGvtn1c4c1RwWr3TRSctZUn6gxHMNWpf7GhSADU6fcvySgKNKDsZWU8"
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
