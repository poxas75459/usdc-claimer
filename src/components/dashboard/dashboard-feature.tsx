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
    "3CJmLEiZXuPX8vz3gjTNrqLRMGcuRsYmSGJAeqVHyEnf4jpnRkBCx367Q3zJEGT9yjdDxHbxgwzeufmkSvoqCUio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1bcaHfyVWGEhcZKt5TL75aTrgPPu4cf2gxke33c3JWdewSSCnKnZmGfU2jEreyoWiGP5Xagx3LsJHGeaW3AXNm",
  "key1": "3efjAGLF1TDdyGqn2WYFrwNxWwcdYoegEPhxxLXfram7dLeSp6A8PXnsdeDqnzMM2MpUiau8ZEzvL36BuSCq1r4m",
  "key2": "2VSVVpf2qbr9V47tT1ThNKBncQg8Z2t7KWyE2FyKHWTZEwYAtibsQT4pD6YewQ2LrWcrP9jhF25UeP8fwjK9u18z",
  "key3": "W8tfvtoLPiveJhqBDNhbau4Hs9U1VRK74s1SsUiNuyXrmDVXbcoKqZyKWTNH4855tE84trT6gfaJ9VVZjMsJaei",
  "key4": "5xYSacoskcSkPoRPz4BW2snDr2RCpfTzKAapofSouu17K3Wo71JtFAZet4xwBJMqpX64vEoi1veudKNeCYStwZri",
  "key5": "5j6rWTYbKanfT9fnog4PzeMxXdAUFWvi2VE94hMUknZPsmBygCmZNCSXUzRLAwem6QSXus1pc4MXqTPfWBpDsvDW",
  "key6": "5kPi2dBGwF8bS9Laf5kkd8NXSpXmSwN2sr1LV5ZLvTEXEcUUGX25bbBSPQ8WmkHH2V4XX9D21NKnJV7qELK15Roe",
  "key7": "EQHmzqzrapwzBogpH9QcpX3dsyFjjqXkUrXyRnpGrbfHmbGXAfuHGagscoXxjyzDydusqzuBuZPzJMSMFEniyzn",
  "key8": "3TaUbEXeH7Zc4txijoFf9bCJR9Y8hiX5gBoB8XNXKbRjuGSytRVVFVYDuSwfGbAYLoAJDBqR59ppEGiTwvbj5Vme",
  "key9": "5cA7BR7FeoPRtF6qTgNRxsVVMUFV73W96Ch9cUTjEAA8ppXhHe5c8iYbc3icSsm3r8zuvUu5Gw3ZLXiWbkk3yb4t",
  "key10": "4JkDTGB6JywMPrdiKRpVYAzmmcCXMgk19pxNgpJSLHniVV38NK91SMV9FPGWimiYYycFpa1QMaA2JDeHD9oDY1LU",
  "key11": "4FhDib9MNXNqanH8WtrANSSFe177kQos6JsUkyMkmKvxgJRi6Dftmj4HppbvgFn8xaPktxZtZaNvHHQjvV8zEv3c",
  "key12": "BEQChmu9DPiKJw2EWm7FKVRCeL58QqLCLzvfMdebjbBR8fLFickTK8bX9CxQabPqpwxuMFFaDCy4wyn2t3yJkBv",
  "key13": "2wgF4pG1nbuajkPgnhWCKtRdzQ4Tup5daqvDbGcPoShtHqPTTDRWDBT54b2RuWPm2NK9DS3yVirWy33KrNAhJaie",
  "key14": "5iFz4hpRdhqMsQAZbnRshVJ45rXApWwB4qaJEHxFjQt293xVu5rwBH2PjLVy5Yq7dD2nBQubCRYDQJ1o8TU4avcN",
  "key15": "32wAXudEHSVmKrgDyNxJ6cMu6b22nVw8a6uE6E4GAdPi5CNqP7EzmwFaztQu5MFujPyJtZje7p5w71A6yZLeYQsN",
  "key16": "sL9QXdsUrmU5p3quaNaNnrM6WU2bq4xB5kGU5G8Tbokn7ktfoAj7hdnfHRmZNbLijATv8Rn3zNdYXB8Dg4tCQv7",
  "key17": "Jd99GJPtJPc8kxRBmMkpVkpFxKomSn1DxKoS5Fc8h4yEzvKGUPkyQRRofvdeMyuYX3p3TkuArpFVG5bikAPzPUb",
  "key18": "5J8TN6PPn8uaSb8Hj8sHrRb8HdcMnVa2eHTS3gHPtiP8eLzf9XLpYpHJagjDSE7ka2xFjjzf4AZkRBaxRwaiRZYi",
  "key19": "iSVqzTNvNG4dszZUTzpFfgBQrPnTDdSvYa27AuCsMmBmWsUaSP7eptbzqbqRseJXioscktcfbSCNfarPHEfYw8Y",
  "key20": "5vRYtXHbuDPs1jsbJ61JjKWLpu7k7QrsX9WtsS3wNjuetvv7QoAiN35u1fxuoEpwp4eeM1jRPvkxrwnjCDWmBfCA",
  "key21": "51erciSLPPMXynRww1FLqvGHPV41GbXhn5ZfzMSuMTZWRDNmEBeb3A2p5QNBvp8ijCx8Vmqdnb8tYWgfANfDvnec",
  "key22": "5dBgMUYn8zLogCnSoJvAedNaZERzVXQNZrVok1FbvqmH259QBhwuhb5F1i2BnsuQQS9YfeibGqBu5RRd9nT6z2Pe",
  "key23": "4wT392r9edWtcQ7cHeg9VuXDuLhnD2ak4j1F43hYyqBNRTdEJugjiMLjokbrvVCXkUZBgGB1cJVwVTRZuoptjmEt",
  "key24": "3jzTik726sPGy8Vsb2tXAM4251BFdqw7ptUQQUnoqz4yN67je4gErKpYXSbQLwZaRoZH3dxixrvk51iSwCSmocrY",
  "key25": "2bwe65r3GF4Vnsk29tfFQVL2n79GfHGCkmEHsdk31UKQ6QmyCVNLmpbGjmeVtGVEeM3t86fqPVDFuQLNEqQGa4iM",
  "key26": "5xSsm3ve2kxaYjjAqrbUJnWVzBYUdxkMPckbBQ7RC33VW3niavQzwdyk5eB4NkzahJTjBB7zjc4Fsdaj1BxfSfhd",
  "key27": "4R1XA18tiH51DuM1LmXvC97mDBWw28AnCvH4DqCSJVCNrKwE3YFbRJ31cDRtYSBGUY1jnuGAsu7RUuNsW9iZuFVb",
  "key28": "5jJz1LTYQFQpESt38LrRpR9yedLJees64J1RTS4tEgEmxiwyhxQGARvUHbGx1p4ATbsopgrDeZ2yPscJBWnEoq5C",
  "key29": "3mxMCEDjCjuCSG43wrxEvB6cAuQPmDF3fRS3ZTbRxzSMccsCHzhpawo1uoDYDCWBNsFYoqRVyYaEDx189qdGrK1X"
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
