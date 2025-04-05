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
    "39oqiVhZhirZJ5aR5Y4TGJu4utDv4DKXAAPTfFAK6m1qcTzmdx7B9EZrJRej7TaH9PyBu57xxbSkvCy5ndXS7u1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d99D4mPRSj5TQqnLkELFd1fKj8RjtwG56NvskNJE3dxBLvJ4ZfShHvUagLacVuRjtEnxPar9sZ3AaFrYbXZ2brs",
  "key1": "32vTqCRLWWgFz3WxSEH9oHYGhtZcBTNZ6dckBRSLKRtfqfaE2XNNGWG3gRQCfkA9yq7CFe9L9DwUmtDHahsUH5GF",
  "key2": "4daJL7RFNCJjNV3N3bT9ZBxFf8Kf7BAonxtjZ9Qozh6M9U1fpK6Se8hT9iTueEMA62nd1mdavLPBAgzuSpBPQEDh",
  "key3": "4PAkfz1U8CyKydqgNRZek2uY1K4yirB9HB4cf5gMqeFoC3sX25YoR9VBURhaLXAmDDafXdcHsBztfRwDcxWbdGm1",
  "key4": "5MsjWKuLKxLBSyWpQy4Qa9XVuvFfBAkJtsB57xniLs9cfwnqvKKd4VftxcCXPs9S2cBcF2V9aEVoi9dxXLYRJ1mF",
  "key5": "2TbAoL3Fs18oQPj7F6oiLaw4JP72XvSPWzb15zJFmQ8FUSJxuGLHi55b9znpTFzG7tqaXphH1P7WbzzkbnGPthfz",
  "key6": "43a59fzmiKYYvwetAHMepqJ9ob6LwsdLHEvrgJHzkmXo1vJ5YPiYvGvdPTUM2qesiMTMj3arfv8wEhjHr9WdgavJ",
  "key7": "3fMQzYkUhqg8ozuic6rc8N3ky8EGqa56ppziFwCr7kspcrWVos26HxYMgBbLQ8qY5LVqQVoFRFc5oWh3Sr7yz5G",
  "key8": "y5d4WTnDy3nsiKdbvm7UeDt6QkdKaP8Q9pQ1dWFDmmbqxY4SWTRzzhye9xy8hxVgJYijc2hS911BLz4iaYiXcmF",
  "key9": "24fjh2dLrXG3uu78FedrC49kybU4gr3SYzFSmWg2b8yiqC19nyMwE8cHSTDCCyT6unFSx8uRYzatLxLm31HKeLrA",
  "key10": "3ERhftTxmKkqFnu9ZF9L7pah2GnPV6LK7jdZNAoS72rXcZyo57o97mFDvavqoxHaskSqqXbTEAC9AfDDUirqTSDd",
  "key11": "Nva4hdwybqdhmqxgbDyo7d6vSW5XzGpkwmxhCMoKhPB5CeEJuHXzXk9YuQ9QwRn1nxDwUfVf8xDD1DyfQBhrz78",
  "key12": "51TbppVajDHcSAVxsuhf2pQKC35DN9x9Eh6e6YpBrakQToNzZYMTua2XrX9jzNzxq6p5PocR8jUeHAQqnyrDMEkz",
  "key13": "Zo2wkvbXwseGBLf3fRPkZY3gZXusCctvkfZ3o69i34q93HupP68Gfmd87TFCZURKAHrYugaomGQNonBKxxDDeQF",
  "key14": "4Ddd5C8EMAtSVapJng5gvSEcfYBh7UK5a8emK2tJ12S9HFnp6vLc6uzVpafRJCWDNW9ve9ZZxp47rhJEusCc3nBn",
  "key15": "5Ngg2dC88z71VDHf4RxXZPYaYNb45DjeHxJNLwYThBgvkVybGoPZB5F9ihYgX2PHVaBhkyMe78c1jhkYY38n18yT",
  "key16": "56uzCjPDs7gRk8kXRyfxdDtcDLmSYjCqgv6cNj3NSS1pkX2wvF1X7kE8GACbCXzFPHz6YmjADsRfqMstaNMbPvor",
  "key17": "4yifQqCskDQvaiffKaJGVeenvpq56auxCjuz9GRzCYH2AUCpYS9YqzVvRqrLQ66CRRRaCzdx24bt2yvcH9wbhCA9",
  "key18": "3S6kbeA2n5ng4RrWSNoX4RJheLKkLJof4mW7FkuHxE9Z3ZXcU7P4g4ckMpVx8rUP1qmFrf4TP3mxnCrywonSVp8p",
  "key19": "2wKL3QvQe9RH8cEGaeLbFGpMLq3Sn2oNGgWJu3XsviheKu8QmYGNA6fvcacH2H4mQPoSjzskD2dJxWiRaehzT98e",
  "key20": "zpK46prQPA1tmzKgSnLNEPiEoXsB1qenxaYBpsvYtzzXNZEC4NmyDdnDshmT16L3MrEskeV7349PTNu735HYioo",
  "key21": "2sz5wB21q5xe83YfHyXETFDUZB6CoNwfPFHMJkumTBvtnc7gu6cLV3NUGxCFiozZkCTRRJoTHQWJgBwY9sKRYdNT",
  "key22": "4nGKMPNKknA9BELMP8EYpAp6zjtVocbeu1cbei5zQGNKxT6KDvNqFraYPNPUBYjYDoQVNhKbyXEvyxwovDjJ9gwq",
  "key23": "5EdxDoi6v8AbtALzFvoVfJjPdYxaKxtCenjxX3tRxoH2R5ZsND6cthSahktTLg7nb1LvNy25ViQu7PVVjPcPHUUH",
  "key24": "2oH1qc1LemBFn8jEeuWABCfzhkcLoGeqm1Wf7xCE84UA7tM9MAGJPwJTyedo1WD3JRCPkpxwpR4VrE93N6sAbMDm",
  "key25": "3WLmZYv3vKhTKotXRXthahKc8B1H5mpQW2nJsBQs9wAz7bv2AxnhcfpFBiAmHDfJcSVZr4M61mGX9dv8gYubW6Ja",
  "key26": "2fWmueVZLwF4HgPWjaNVRtBnLDBqe7phUT3C5T6GamQs54BpmRf6DaT5yULHm8JzpUkVJwif1zRzHn5BVYV6dEXc",
  "key27": "3hDPvrMut79dt3vtFbTzWQogqmgAxz18wWfbadBUB12DebnFbK58AbQdV2cRCtBxzqFKiysiQDTG69xDnh2B8Jpu",
  "key28": "2vHmtQxvd24VGEgz8YZ9FAAqcXHVDC6sTrdX5FKzXdsKtwYg7Zb5WENBjPdUht3wMyQngHuW4G3tEpJYYCHaWjdw",
  "key29": "51trwwQMAs2GPbnmhwg2mfbcrevKBaixngzXDrZjCTugmE4rVZmC3QdjVD58rAgUkrA3D83ukdTL9VR4Av5uwdHW",
  "key30": "3FNPcYXq6mpSQeyPN4ST8nkGBM7qQs3jmmnw8GyWbNiV2D2WLjiGpLJTrG8aFfZSxA4XDhHvfTNkhRxaMLaknQtS",
  "key31": "5kCu6ow2emaX4EJbnMNWt74sSmEiukPjRmT2yZZ47XzNUS7M35j3YrbFACfQpfMvagMuJkoy8uzFvyYYSgXLBVjp",
  "key32": "3PUXAa9t1kcYzZFMkXdTRzJXD6EbKdS2bAoW5YQJqoKLnqwkNETMxA63RAoCQyjuAdDhtwzCBN47FEHrb58eMCwt",
  "key33": "347u8T3tzGWxYnxvc2F326ZPECjhB1nDS9hAt3KpUah36fPdMNgYvGVi8s13ANDY7XfBxx5HwmW2wLwhcRVyueme",
  "key34": "4fNu55osxRUoCDq7mw35yP4LPfe22Ym6yDC6hosaKLiJzsApLm963TcvcnmZ6dMAxuumLmxAXn1fWy48FwY4Viy1",
  "key35": "5EpE2TCmayycZSBdmb8omW4rwMKeF646aL4hk9fh3ZANDo2iJv8Xk6f9MwbyyMupJeDzHt2R3AMczmatArKSQZex",
  "key36": "57WCsd99PPARiLhV8ifupU9CeCgpmdqsC6yNGPR9vLo7JPDRJCPpfPE92aNM2Q9brhVz2a6kMTPDFEaSDwb6gE8Z",
  "key37": "2jYreeTPzNVdYJgZq4Zfiyq5t5tWFN7GSuimXtjgWw6iTbKiKgSyM6CmHCPqCNVtNb79VKYbsTGds8cehbY5nc3D"
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
