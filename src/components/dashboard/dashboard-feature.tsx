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
    "rwC5KfXKaF29qVeuTETmSW4QosC32KhFVkFaaT9T8nmA6nwWg9DtiNgzvc8E98gW7gvq1vQaL5zQdkteDPqtEfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uyqj9qsvzuEotK8wsSJPeZKLj9yumQW8czMBvEnECuYnQPK3CzJAGkpnA841EBbYTgB4tsB8neTYhUyk9L5LLDX",
  "key1": "2sTzBUUn8P4mHh5jeAMSnpTLmN8gYQ5kJoDJR4xEzHqcv5zY9ow7kMx98JP7YUQ8BhR3kXFQPRV9VB7FMgViugit",
  "key2": "2QVs4eN1xYpMAqWfg1xkFzugVYQp921BtC3Rnq9YG2gNdmypGtkELaLBe67xt1GcCWsWcrrkTUKvKrfYW1p6k1gr",
  "key3": "2quo1wh82eamEPJ4C2VwFyhttbnXX9W8R9mzjHV3FzbsAYZqCUYDKcKcsb9GkBT3wg9SmVhK4ZwrU1tMzd7f4M9v",
  "key4": "4ULfNBn1R4u1sG12Cutfe4ziuoDk6847QCPEidjr5GtTK7QmvCG4o9SgGaduhRhJCX9k8KJQr3BGVzqPpiey1s8E",
  "key5": "2S3JEjgmnr51jHUp6sVygS5cy8Fz1PqfQBq5ZmUH27ctMimPr5kWbU4HiJdvAT1yJVGejJBYqGtQiD2eisEh4Xwo",
  "key6": "5SFGTzrypJqgZgTp2hqu3GFBBwMfYeZ1NQqH7mCPVRXW8AV63qWhdfaEVwbHacAkXxTdnj5xVWWdoTkMHvHXLCis",
  "key7": "4Go9wQnxdV3DWQUygHEsh2ZnrK68WpiH3F5B9fYJS116YR6mn1A7cSjp8R2E8AhzAJw5rK5UrxefNYGobe6yr8RG",
  "key8": "5nA1D7nHpN4BWGbk9x6Qac9BZwPKEFdsuk2r7YKdYN7wweNknmT5KFEuYM5wPzqgxbw8ffLpgN5BKVFqQXA2oALG",
  "key9": "nFPsH5wCdmYctbEgaAmWEsEGbuguUZBKtNbuKangCktuAwqhQQTcVLT8xNW5z3oR54WCz3qKyoGLSyRxYwk6TwU",
  "key10": "5VqXpNiw5MDWevmeaDoK8LXCm2PE4TbxD8PArpazma5Hhm5A6BMvmkKDERccGJrB1wCQ2G4toYQC71EJ2HkQF96Z",
  "key11": "4NhLuJZvamXMVFKKnM5wfWHW2D8uSECw2rzyUb2YszLDHNAabZkfJz4mUQYVeMsx61WCABjgUrxgiHUb2UsNbPLR",
  "key12": "zYZEC6vTCjYVbPRShUGe8nBPBkzkh7udXLkzvE7wDEkvp7aihtJgrnNiqXnMQfNVTQYEfChYz7UuMw4GjXMCv2Q",
  "key13": "5cJS3BnDXvaNgZHQfADFu26e7rZc2BoENBBAcLfhdCKFamNtLwhfps9QwfLMiuJTir5kde6jbz35jYCX5ZiBY1GS",
  "key14": "2EEMeykWqryYLiHSRKf2TG8wZBfKdrTQTbHxfyGfFVeeqe138UaZZHUNMhAxLeVZ9Mivu8p3LoRePZq8Dgdz9sUQ",
  "key15": "3gL1GENSLr1aWmsec43v9ZAobid1X3wGA5REwvYtVzRbiH8GdgAqf3Y6HJRkqvty9vaxxeGFTvN6YiCS4C8Wmo7w",
  "key16": "28ghqLwiaz5QzdS2fGgXb7cVyK9Z4njwhrnaWjC2tHsWrJfvTcVyiPMAgDobeuDrRFkwnKRwdswTxscpK9oUsdEn",
  "key17": "31tgDVkd4yvmAzJcJAYmbwroQUJhHvUhAwgHQDDABYixm3PoepSxtQc3rUiaX3KrcEknSmvKJ2M9ygDkkTEPfaV2",
  "key18": "2TssaGXwjWfXKpbM2fF8uBr5h81oRw4VAjwFTK4RwrrtsHw2VnJ1QkXJwRUGj1BqCDh3zoE43qw3uLQtrTU7TLAK",
  "key19": "3oQ9yq1c1jvQnSUsBFZGUzCQCg4GBePSoJVcBNVqwkFw9PNRsWZCCPvd2wbexWTTKec1j9pJrJPUJ4fHjCK4aqYX",
  "key20": "2t1RQAsh9bHce3VBSkQEAfNFEynPznzEEFEXiSWLpTgRmugGq99tPExVDRvRtQKeUZDeVJWQNK46GKNbMQ8e6Smy",
  "key21": "5htsgXJhrahTaJCcaYYAh6aMAuRvZ3nM7Qg4RNjvgyYKwWA9rLAEv8M28vM6MB61cEafH2fADTGGU2A4XvWecZ39",
  "key22": "2cAaWHMrs8fJpx7FnnYoj2CnBmPPPTsZQAap4B8Vm2ZWi72RodfCRbT4SSvpeMr2x4TBpBrExqiprmnyi7cMQbzz",
  "key23": "5G4kRwAtvUxQtgo6dScdYreDre7nmZ9j2wfYyvrgE3VnczyrsskbJejBKEKLNMaoB8it2XK9j33XceVh4XX7TC2p",
  "key24": "59fcei2u1q24xW99qP8HdRrwos6WqKDMFoEnTFXhowsGWtXCSNZVegGEPZ7e8wubVweKVRvUQFpC5ggbguFHckZJ",
  "key25": "61d4cCJk5pTXrrgHGSnCvzry554XbW5z9oMj1gd4nBvw32SNWHzT8unAJ3sw7FV3Gwey6c2sh2ghx6ypx9jHofH4",
  "key26": "4AgZt8yVWCyJ18aXigWgjxY89ztsXs4szpLDu5MRektJuqMkNvU3SiwPDiUaNzPPaeEcXLYKz2JPdd7s4v99288k",
  "key27": "5ggauX5uGx2GXGaQiAaBLpCLy4TYUDPCVQwVzCtjA8ZoBDhAwRxU9KQKVzXchpFQceVvU4XziM3SWNiAr6XikywS",
  "key28": "5e1UVqhu3UAVVnwhp3CdgSAd6s2jC3pfS6ezedRS74FQ4j6Fdyo54nuMZKoS9xz5fVkCiSVKZJVBmNL5g9gSC1D8",
  "key29": "2KUBQH15c5PLANP4U53Z3HdTuiySzwAoZrszGAFdNUKw2j8seZv9zUS6LefwUZXevCNzaG9CwM5PpxuMcZDmwXaw",
  "key30": "5YaoeWkhuizdzWRyYUL3w3VMyf42FbYNdY1XYDxh1HVpeKrdoUfA9xHgTnwhKdpkszEuRqWxckoizBAWCCTHCbs9",
  "key31": "28M4EKbMjKaxFVsfCPPmG1PMtJ4sXbGcMVNFDAg7TLf6nTVkgXmPSaunS6fyxwH9D3QnY7QPNuFZXCTsWMNkFwJG",
  "key32": "PXhcM4XU8DxA48eHjceZ62c41mmt1NirEPky1vj6EX3KAXSh2mfPMW8M3445WCqh5DVK1i973WXPhyXKadZmErM",
  "key33": "5TrbTTyWn5wNQG1NLBBKfVT16PRNTdt6J4N9z2i7wymF6fpbFwMcExGqGfodA49rhzQZL7WX1UBw1A7R7qZEUiZx",
  "key34": "hhn1LUd7UWvRr2RanFZ4BbgtykpbfR2nZtFdQsTxnn2YCcKZV8hHsdLhRK3SPQ9D45K31sDH4xRkQq2XLELX6ZW",
  "key35": "29rDdFGEJGjUpVoeZwYdAAznhKEMrVaXYzbvDpKjdzmc3ZngRmzBgY27Qnx4Y9DWRCcP329ByHjaWzcaf29WFMtt"
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
