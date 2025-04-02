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
    "29sEYGTTAB79DDeMZxoiRST7EJ6oQkZSVthqnv4zoXAZYQZ8ehDiiL5CvveQsoeMXjAsApgM7Nrp6YpFMkaToXyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W6wsuhtvcL2opYFpaM5ymWvWQbf5jnq586jkSUtAC6bm7oGH4oaKLHa6Kve3GcoL2GdcEuWCJEpsQdk61dyHksU",
  "key1": "5XnqWF4oFWPrcME7pjNVWvWzjthYCWapEujnbrPeKMKeS2XwJvBPaJ238emdwdrEjKikk3eWHkdPLe2prz58j9NH",
  "key2": "491pE5VQMbmBgUgYV8Kbusms36pyCwBFkpqXcrMEuQP1F4speGASfFFbcZwUTsK6A6nEyQmkfbNyN7AJk2573iqv",
  "key3": "5jn3KWYcxbC1Nt2qWRvx4viCEujF7ZjozmXERAxQshz1Fm4GWYnpMm9FiQmFscBFXpx5bNLxAT2SamGcAMauNQjt",
  "key4": "5hTfMvs6gm8Ca7FcS4AFELCwDHL6mjJJ22BWWD4CoAtQUg5hwUkrVLEKJrBLgjSvW4r2dDSBAPuZo7a99Dn2pfVP",
  "key5": "2Zgjuy3zKPhfuyxAZEssMS43AbAc67gr7aeECqsBCvzMXBAdnZUpVQZHaVcHMS3fNTDZgrbxinPcSCx73uEMghZi",
  "key6": "5hpVBaiHiaW9PCLzjgeNpQFXP69twuZdZdTFg4fv8vQGnBVVPhjMiTkK7qn2C4xZwo6AMV4wdDW5asPw3RDoEaq",
  "key7": "2CHo5T7PgPEq3iKPMhxzQWLbJEqTH2EBRAm3y6ZTTcotgjhCTAJU1eAXb1yaDkzMBcacyr8kuQDm6K4YnjEHAQv4",
  "key8": "4jA3agprLWgybr3NeYHJfLvSX7cH6XWfMJnXJoiWjNgd87Lz1L6QYFbM4JMVnfGScWmt7ZEzc2tK3Er8fTBXv41b",
  "key9": "2xXvjR45GdB9jSeFkLy1wncbjCUrH1EHnYbgj7pGUDiM63crVPzAMLpwDChRLjT4gTqpHHC1HYtjLHFpZFjTHxFj",
  "key10": "oMvTkhQdc3GQcnywQ8R5ydpT77q6HFBu5ieSyXdUZsWLiGotPBpTE4yYuPxwfi7VnQB3pM6ie2kWNVDJeE2N3nd",
  "key11": "3WwuGUdkRdXo5nrmc8wfyoDy7QZ3Zys7VXvGtNxZHheEvseLw2cbSGpykkyX4osUSBhSjucSZsaNb7wb7YrekU8S",
  "key12": "4VdyiWPvDHfrJy111PSFRGei2to81zmLivt1ezX8XqTF9a5VDdk7SWm7Kpri98qvm4mwTqaz5wX7Hi1JgN5ozb8G",
  "key13": "3kZpMhWPQJky7o5k7PmkSpyvpTRwBLgHkyPiiaszSCPg3cd6DcnaqN7EWvZhW45VyqGWPc7Gqe3pbnpTsRXSmLei",
  "key14": "4joLeRiieKnE2TpZHL3xhMCvDgFMsW14r5MBYDPF8EUewqotRrD5ZhWSgRkbdru6MGxh1w2wcN1YCfcCNVbW7QJz",
  "key15": "5KSrTsooQqiLuLrD3tr5duRkp9fJARMhdmgXfn2i1BdEThm4LjjrVXb9CcwXmDroY3jUYqHyP9b67aJFCmhunQTb",
  "key16": "5rwws484jJjrHTZXQa84YHxksgKfafp3hUT2C2u3YYGEzVfMEQyxLjxrwRzeUCx6kJ8gdJW8gTRnE6YNd9xDxEy6",
  "key17": "4jEXNuJbt3hv27JBMFtFav1cHeK6LdCATQNqTGNr9cNUfo7DVLAhq2XDieVpSushbcvYzHZbMuF9yYjtC7SmVNxt",
  "key18": "4mJyyJzST4YoxpYHJ583Jp3VsFb8Vfr3mbyekCZQ1oGHNw2saiKo1WW78q1HijzEyMAuodRHVygqCeDUxYhZf4Vi",
  "key19": "5A4gF7N6V54E1nhzLmkggP2bhKiTWuqGwhy5fVTyUVuRZ6ziJcDujHQbmaiNT9635tYcvc4wR5Ly8pBzRRT2RhV7",
  "key20": "2EoBiDjSQE8YimdANGmUji6W2cgjQeMDU1c4hoKJZu7p4XWZtdtzRBUjCv8wqUSg9MdVzVV9b3afMM43rFiuYUoZ",
  "key21": "2yJrGoQQYuUKL9JdRTZQ5RWZ2ujKRLpJZs3CV6ccP7NNVniXKNaxY6FjtkrFKgktgvdJQCbgbFJaxUYcraXyxNsk",
  "key22": "2f6tDQh6R1Uvuf6UMWY1wnXpSH9NQF58nCZLcuZ4TxQZcdfDyJx8fHeMD7a3WiHHrgk75QjCEuPWXrzCaMRQYQ1d",
  "key23": "5MNATNqrgeXWhEE8EQBiV3Rj338aMZgof8aW2goNFPCq3PKCWgX7zKSin2EREgKVyR3idwrXfGD4yfpdMTnDoerZ",
  "key24": "2UzuydxeVegm6KUGMBjo2SvNnKR3VtCRJ8C6hFvYmH7kyjgVWRmPyGayTkbtJ2iJGv5g7ToPABPA8Xbw6AduavSL",
  "key25": "4FKFAi1LqNjF2xfsX1nuAXJaSwpMrhXesy1oeVhGjfuyaSnAAUt6QWX6eQU63p4Lq9Gtadg8c8jtLZsF79AAQG3J",
  "key26": "3PS9DYSdxZDg8JL28or8EKbPxM4ntYgNa5eXijNfndJZJPNFc2gP6hVPgFoTev4dvifBR72rRdm6fVjA3wfHsts1",
  "key27": "DpiRBVQxtgrRTUxfvVtoxBc54c9JkwApNV13xhvfLZPpyiMEEcY83SfVeEvmAbLRq9cU8wzCaTsVmeHioy5Y5pS"
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
