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
    "4CkmQNuq9S5FdMCrsAE9ApWfZXwKVUM3adzKR3sFGrjPoNTKZjPu7dk9MR31kcuQwdEs64VwnUYTabyTuZRRx1id"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z14tL4ZbQVFKoqWjyuEKWFnRKx7n4bydPmwMzGEQggvs5KHkFr7xN6yx29SeMnPZNG5D3BFRnQxPiCRYwGsS7wM",
  "key1": "kMLU611z5Ux9cy8Cgjju3TGiTEsUi15skNnRDx71gHv3jPmDyVJD9Br6aGzZUs7e16V9g3ZA2Ln4QoaB88JvV5w",
  "key2": "2cE37dqrN8HZxP9mwDdYRknbdtNAir65B7DvSD8wPqiu1v6WKwfevvi4jF2P31Jy4zbYgqjUobaGf5PF5VaEDENL",
  "key3": "epxrCDPSZE9TS3tRzjshVBCXF5VCZZpomEZ494xU3RHnX76GnkS7u97MptDG3gSSkAPU3oSFWAkR2e4MkgDJFSM",
  "key4": "4FrwvN5bAtnVtRuQi1t6R5GJnF8WgUANtgebU8ehv52JweU6juJmnK5RTYT6inPJLJqkB5QaoZADMqy26eSmFCQK",
  "key5": "2bN977BPEiGXarVAyts73yo7UgreCRV3tjY9QJRNsryvM2oNBS7kkqGp5fbSjFVsoZWbz1ADtmbMm2kq3GnbBc1Y",
  "key6": "4pU4Zjsi6d24atFV2NAfAob9LxgvfJXexcuqrVxvxGQ6ay28TKQ23zPWogC6LLV7KSd6xSo2AKjvNvZq6sGv9rrr",
  "key7": "5sFJy9TjJ31yyFJVRW1PoyYCXtit522Scsw4AA7MmPzek8U4UmK7qAt1asMc9DwkjhQtxHaYRVK6xLf547QBeSPe",
  "key8": "4x2D1DzWJA1obJrtempXpfkz7owfFUSRczqqD7jFwPYFVXsifwgWz6crivWudzPr7FYqxwrN2cb8caFfUAWnF2a5",
  "key9": "24scqE7ce12gQHW2jdQ45ixUv6314D26qUouXnRXzg7yef7qYfE41xcyBZjnFB2nnqRis4MSb2oQuWaxdryo4HBA",
  "key10": "3AgN95Ce3PzWHUpBAg5tD6a4k31xp2P67EB5Vatv2Jb29gEmMwMahhpX74ZA8VZtSpbp1j1TL1CuDSGHWak9sd65",
  "key11": "5f3EPSe7dF3Vs1sFvwdn1G5mqswwtvR5nYxerzXDDr7F4Fk2AVx6g94wy246MDfHaXZWgAHXBZTbt7JoCKk3bHgu",
  "key12": "4PhgprU9w7LMafqycYz7bXYAXc6MogLYk6pFG417ALCq2toHz2USh4t9U3epGKgUGNxZvDcd5g8q77AdE5nLVuyb",
  "key13": "2cfx6UUNLkmzMJw7XVXz19BAXwyTApLww9EPWPoVYHqofNcLhoWiGMBpangcKeNc98iduWf33isg5oW62oEk79eD",
  "key14": "3FiCnc5HXvazDTvezcZp8wy6t935tnWKh6j1CF5jCX8d1WU6dhD1wYac1dFUKwAuWdiGv6xnfPEMvDnepbHUNmeT",
  "key15": "62znBVtgezDRNnoHnqJWQa1UM83NoNGn41m1miEMLZp3kPNyzoBbfCFDZVGTGFwCDRq7VaKFfnSoFwyJmwTZwUT1",
  "key16": "HdFFw8C11h94B4fYVkDoQdTKf6RAQ1GdWYCD6zkWXe2V3wW7jx1ScRyAcRepqEKxgipunqSiuTrREKm6sHj81kC",
  "key17": "2kAei3ormkLpAHb47DEVC2uf4g875PdSmNG4GGdJ69eicdrcye7EMToEkCsYbscDwmZLDkn1XT39umy8e5REdR1F",
  "key18": "EHf5uPkBVQ3aR6zkUdwoaguXFB269urC9zi4sGe3QGDaDBR1AqEbhLGDCLuPqC2i7QutHVBxtQhGyPczdAitytz",
  "key19": "3o5ZLX3YSbsG9oAPWfxDLdAcXqyDTe2WysYNerFEgqE1KJTt79snXtFsuyKdPYixuQN8L49nSf264dwtMcGoQ9KP",
  "key20": "2pKLbAaa5eWcK7kNi5DSe2Y1hoYa14CBtz8wGM5f2zW4sZWeXwXMTDw9PxoKfMj9kzAhgw4q6kwawUTzoSM72Vpw",
  "key21": "2kig37pcGUMDXHQZ5U5Kr4FKGHs5a47m2x6N28cxHbznh8HaSqSQN7VXDo7thh17FpiYg1GsVk9qEkL4Xwd4xyer",
  "key22": "Q7ZfBVEMxCy2w4aqf29qbQvs1KrCK7UozkM8oFLCNa7Gh9BJbRYc5hEQPtr3Mje4VmFhdYVQgs48wZpJpCVWkJX",
  "key23": "25GdeRfFvKewP71zihzqQGzvM1GcsGg9Go66mjKdkDnCRAyVVouiGu2kXdLjviwJg3984WCSMxjyWQMLooUy8y9a",
  "key24": "5Xiy1GZGJhbzV7SUuBTkxNfUJmJxTmj7fxc6E6HyaRQpKyo8qKFngVU7Zmy9MvFRD9g32a44NxpeWbA86hQzR3ag",
  "key25": "3T5ttfEdSf1e9HLoKBQ634wLQcJJoFnq7he7YSm6cpD2V2NnGHHBA3U5ha5EbD9NG2vYRAmqbapaKpGjMrtAwr1L",
  "key26": "HFY89fQBwkJZfbL4HkyMnssQos7kv1DQntMpKpCYCCYY2GM2N2nTViQKyjoBV7YcMa8qcXWDAAvULCCa4a4tMyL",
  "key27": "2bijfsWVd9iSh1eSteorjm1ovfaEcC7YEK4dWMptJCiqxWva84bYyCv5EvsG8KSfQyeFJTQPoTkd36TyjuxjXETB",
  "key28": "4XWya2A1rPuMhfVRonp9SDKzKZKmazPppyNvGovYmS5g9fGutJ7o82hAmjWr5efAkbnTS4pTDLTKCUs7D3X7mr8Z",
  "key29": "nSwnm7ukKujwGxwUEnd9dKWKCowUAtYRpmVm1DnDGQJLce9T5x81bBJnCjyxNXVpgWuXwUvFvBWJmnVGsa5h5xW",
  "key30": "66JNqVEeF3R3fY5dm6XbdoVmKc8wUCbwdZhc6wS1mm2ARATtRJCRPyXppRbJ5kmyUKjpxvF1h5TAxuuP6M7uNNum",
  "key31": "3d8W86JLcNFgZu2pnvndhQZjkFgK7MQSomWHJk4Hue4wUsgLFPSgKqYvvh5iUTU1B3WbhiaoeuZr4B1jcN4JfAMm",
  "key32": "4Qvz7L2jxnqyHRHmvi4h9ayN83mQp5LBLHCYecDWzZmSdL944TkVKYy7bgUiotLJtfeGewJCZterFo52CqvyByTF",
  "key33": "3dm7GXBYnUbxXFaUULmJc3EGkP8jaiC85aFAgMG6o91X15dxaRJKMDwhR2ftE7ur4L47utC9y4WfabbvevPn9WXM"
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
