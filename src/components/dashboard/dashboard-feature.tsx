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
    "3vNLabH3Zq6x6HtXaexzUeYdGaaJoh9Sg9uwEqr2cHW1iJgwM6oG6SoUiKezQcayYV6bypreYMpxJTxRL65UfzVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRTcW6Vupv29fXprWaaLgwr6hgRZqPncCj6NiWcegu5G28UkK9zrbKTpRSDdnpFuF6zG861L72HaEkqy4ZsTg6Q",
  "key1": "65xidvtVnmoJKwtoNyRa3UdYE32Kyub8dsg17ziWw361fhbTTs7ueHyJtwaqsNWZ5QRnRJKXCkMkTgSv4VuUu65u",
  "key2": "5K6muiUePp2gCBXse3XteTKPQAxKwWYN9cjJr1yvY7HV4xL9sffM3SMpvtC2pbTvuEvrBQLidR67brFKno3szZqV",
  "key3": "3waVKiZ76je5xu23vrvnyNh1vye7dzEGqNTTEGbd8aYTPBKhZphUgvHHkM2FHefrBdZ1cb7DCHQizWkG9Aqpqfyy",
  "key4": "2Q5Y7hCFq7GJAaB7DTYicPqQnEwGuTKzHy77xux7fRwquxp8EHE9KSVkoueLGSRYDkmYuLRpXkh2LjNmHzisxtBr",
  "key5": "4BzNgNTMHzV2WP1F3w3eqF2sToAw5EFXbiWic4U1VFs9pBKdNTP8sb7rn6eFE6auydewyDh2McSKzoQAPxQhu4Vp",
  "key6": "2jEGUsYFn7fUwetQ8LdU7ccZQxNmpzARTLvh2fveGrMuuKPSpHysnYowjBafLU7vFWaEcbRZzE4qHrmWaEBuzCT6",
  "key7": "5e5yo7HK8yeD9MutoRyYoSajrZg6axNZoBtNKshoqBWKWxVjS1eUYjQanaUooQJ3EuK4u4o7bAeUnLp65fE271Tc",
  "key8": "3K46LH6vn7WUdvA21VSmZE3ZdfGdmBVw79macH9CyQTLRYiMpii6B9iZy2NHVvXETcn91SHF9z2uRVRSXs2JjW2p",
  "key9": "3NrmxftSGkdnDMh2E1ade4Dbe39QYK2ejWW6mMNz2GWP9ZKM6Yhzs6QnZHwt9zxBQBPbvaGSoFTJBCwuAJyHwp4X",
  "key10": "2ApaSf7EnKV1Krqgt5sBA4u1m31ypRZQxy7WDjKcL9kCfmYJ4PXbifoZm95ydxYU7tpaDaHUqCJsQUC19EWDx2uN",
  "key11": "3yhg5o4UkE9KqMhxwGBSeJzZUbsEAtBhL3JCGWxCXqhtBm8GoDhroRS8z4xWvdhdXP3vXsHqWiccjjf6FS28sU2V",
  "key12": "34wx1iRSFQWKbaba1xN6iooydBR7wt97y9LZMFJwtyBvBHjnA23Ew5Bfy2rBQVDucp9cLQTdcoUxtRhkEyiKkNRn",
  "key13": "aGg4D2tjC9ibX2cCTkgHqFMLCeHY8cmC3bTNUbhSJkp9wvYrgxPXZ1aUyfj23qxXns6xkVr5vX8iW3vEJjzLXjf",
  "key14": "5BLQaC7nyhHuL5HBkHLXw7oJjkcP2bra4NMbti8bBzakMnDDHRypMSs2eqjq1jKbd1WqAkJVhxFpDs9hikhzebCY",
  "key15": "4h8rYgu4AvXD8fzQjRXU5m1m6QPKyLMFirnCLHPbD9o8Qkc8yDGLZ6F7TS3rxLbWvSDwqjrFZtmp75cqSGkNE636",
  "key16": "5UzaMsCWmChUmb4ofCZjPZxEFVzvckNKiF9426hDHQt2JCsynogBr48dazKTkgQa7JhxQ5eEjnGaRaNeXs3PTm3L",
  "key17": "3GSZm8tsbkAVm2iUuxNr1aWfxJLa4PdKgpytwedKQa9QBPWPHTf2yUp5oAn4WJx69NqsPC2fkKQ847aDqPraZuxF",
  "key18": "3WrvE7kifzDGrK5FDAR6efZYmrPgFPwuuaS1gfsXFrZLAaoyLjsvurYPYe9xmBadmWmq3GTT1CxSBLBWd8o24TtV",
  "key19": "5wVHhjXYdkaAHzHAAF5Z4xRwMSvQHip7zzkf5qgXXhkXrSUEMJcjhp5fMKnKPBW6VPhJVHaDUTSvGjUEjTsjQxrE",
  "key20": "2uPxPRfbU66Vo55p1kBv6eqx8FVU9zurEQDCBZjKkUxcVdYVSG7MY1gVPbmH42gB1bQBerzbw5ibpjP6nG31H3dF",
  "key21": "57yKyzS3F514qU4uuSY7fM4AXMTpLE5vvXp6aMZDZjZ8xexDvyoe7KRScjBXYTej4W9Hnii9N6M7bCBTSHLP1GpW",
  "key22": "2kWYC6CBuTnQ9Q4YjcYBysJNmy2epkszP4uoz56koyxyGLicALgASE6xsHLq8u4njYPKZSPv4ZhfaHbtAD88uEhz",
  "key23": "zjPb4CV2pbi56dELzeaFvhovFy9ouoUN49ZixafnNJMNvHFimF8h2vHskqnoWM1X4u9dVK7pYbxYGGS1kyyKUe7",
  "key24": "5ttKV1fuJgeTAFFxbGCsgddM9tzitqZ82GazRunoKWRFqVmpjHMMLmdEotpzS3fwbKHFdRSXsbRinT5TMSJj9hgq",
  "key25": "4gXCdMiMGmcf2HPqqGCdbKjiTt5yqa8zSNnJzzqSf6LEMEHmKdzttDmtaUbFNxHM4wXSRFKMFGPwV3V4L6imB93H"
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
