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
    "4QMHTm93hrGWUQr4YtREsjyqdP2ZPxja2rERCsE6LpzXhnTkudbGfC799WCX72LNaVHRQ8k9hjsEzcBA8khTSiQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JoNwAhzmWutxwYLxfd7sCQkReDj6ReBxS1FxHrax8UrD4Pem3sYypVLS25WYLZuczKDhPp21236z7Hf1o4eXoXB",
  "key1": "HWMSLbJSJuPjxPUmX7n9LxcnH39iuBmYcFJvRbgb6A4gGvkZGEqo4GgWAMvXPvrCfV1usojdCrWLwYwkJBCLcet",
  "key2": "2qYCfagVX1SRTs2Njd29LxjTE2DdjCXLZe7R6Kuyzk8Jmvgz2fk2TBBSwKyFmVW1z1rSQfyPna6P2JovaG2dkxjg",
  "key3": "4pE9FTkNLAma3LjBCmeuVCnyFPP8TeBmf83uhc59CtWnC1jZTdBQrU92jpQjP6S9Fg5BuHe7ZYRpmurEV5ymNqiS",
  "key4": "3r7UzF7wU3bsHR1V4QkEkt9DDuso5WdpHfYpFYY1Hq5fsGJR2PkP81HADon3kGcGpUChySwMJ6rYw9QVqmBkUsfN",
  "key5": "34aiCJvCLfMGPBuUijs5rf6ujoCHzEbeL2VR7Ksghp2oZ6z1LvpskS6D88VZtKAgCCGATUXUECC3g2MKgq8Vq5og",
  "key6": "36Skme1ByjDXzYcesHeZJB8AQSNvdvyox9TUT5WAMoUfAH1GsomhZDqRgSWCZ1fHJnkVfd877gjC5CGENrN7ny5D",
  "key7": "pgw5s4bSKo4j1A9zKR8BZDSpCwRAZUeihethdvaK3YWLCsY52rFAvJHNxspDTvk4sTncNDXM53LbgnxQv6RHxgc",
  "key8": "3AC6sHatTwcF2eNuhchxSHnGb8rctWDFhEynBHJgGbbxEXwZSwtWMHYnUvF5cpoE3k7iH4QEvRkhHj5NLRvzfEzD",
  "key9": "52u6Wr9p1GhgWvJh8ZTQrcZruXr2Tyg7g2Yx9PJpVjTodiHucztHLZvENVfQ7PbExs9Hv3YPj4ZxVS9L9U3VrR5K",
  "key10": "5gaY7iCDCgs7MyGGh2uckRkncS5sSfy94RsaC4CYK8jYd89W9cCt59EeuvGW1jScPRV7cxK1zk8Ms1h93aWRUj5p",
  "key11": "5Y4PH1sEx19pwjrq6dJjsYx4eVSKAFyjfREkHocJXY87m2pYe9hhyj7ToLCCnttRDzZG6BgqnSSXbvqASYGAd7B2",
  "key12": "2Q21x8i9aNxx2G7y6s3QammRx3gHAe9SwuBKhD64iU5x52AjbMrfUeLMtp5oRei3MjCpLRqsVCUyc614S1xiL1VU",
  "key13": "3GW7ZTCd5bDtpu6mKhaAPZU2xCHYNhRWfjYQAMva5FaNcUFAmSaXK6YhGEVKBytti1nVDyFXjHqdZwTkEQSzowHs",
  "key14": "4cf3nhMxLK57g4XA75ohUVqujEu6xGBQySskUhW13AxFimXdCqeMzmpvzftmpe2XkdCYJ92RCSNe9kYGaJHN6H66",
  "key15": "31YQYqyMMZQ7VkuizVjgNagibjzw1Q3KggAuYZDMewmPFXwbGTUvbveJWxsjxDhdCdVNn7E9QxfLxLXm7Fs6TxSA",
  "key16": "5h5vu6gtUURwnUrLsVHzQUUMoQUDcNAxHXHvJWVwhzbmgrWKcd6aDhPN77Az9qXBVfAzBWRVK342dnzTSsLP1kxq",
  "key17": "4CdmKh4wuBVfGsgVboXftdgjEWXQLYzwBDn6u4caBACpU2DZbUGEzU1Bek4FGbCM8wapqDFWaURJLzycJQqPSfgG",
  "key18": "a9FPF4fTFYvx14s6SSaLWiLHSjDNqKPbRdWik6mbCJR9uZVnRQL66ms9iAZUMN7cQWetEztJxSbbGDVhsFARBfa",
  "key19": "5W3FHTjhesD5ePVfwdP5Cprp5cZTmyDurcPf6n8T8prUMWRdxPUhnk1apRq65FvS8XdHG3gaiW1ERuQoFsyVdE97",
  "key20": "2Psaky7DgDZ89AwABaCnaxrc3JmXKMRZm1ZHXRXBopq5QycadHaWUKGmGbN7aDRui5Rrm3hQiDL58wm5SyphhKXB",
  "key21": "3GwPbqmxUe3dCsrVQKh4UXtyz3iATNSQGuJcSxsntnjpAWnhNR1RoRt2k8USq6F3JoyqLt1ThGj6pzPAzB2Ck1AT",
  "key22": "yyUp6NnY3KeXGKRMfubGF8bLKwuRq4yak5f2vocYLgcnNEJ4mWyRaPVhUWYpEx8fRdRmBmuccjatRBGtbhgEqUa",
  "key23": "kEgHnbu3HiMJGnrZEiNMExaRfjYoYa4h99zoeYx4vTjmVyqZB4gyyxKYNQotzCdsB4T5ZWsVzAQpyxawMbbEfEU",
  "key24": "5D4To9FdvKzaKAfgG1MJGaf7nwStjXb4TGGN3VXPLtJUYkoc2bNgisp2DvgwToppcR3wxw14TgLZDJwh4irdBWK2",
  "key25": "3bzdZzEHhqZWtQ68F86U3SPQNCQ8FXgnb2aU4N2z6gaUQYH4ozJMavNYKbbfvzf6nbGwa9t1gA1ysjhqx97WLh44",
  "key26": "5GZTG8GuRwTP5Ped3rhrELTkh5N4Up2qkrC3t2gz6KECgyP9AAnb3NymCJ3xCxedxrtspiXb7E5QBx182ieGwsy9",
  "key27": "P6yYUUDChdiVKbnom8tNLZCP1fpzwrWCpxaY1bowMxqy2jzqbCzSH1284LmixekF7qVHZQb1HDNWE1XEK393ZHH",
  "key28": "4vydCHDJd2Lz1ntmradeqC3W7WQmJUMEFtFoWMAemSRTJwyE1pvQgMJqRDS7kk6sSVZAN5ysbv2gx6bkKbVho2GR",
  "key29": "SPofkEfx2trhYZUHMuqm9mXyr1xdBBdT5mtAAHBC1AeUu8hQgcqGdyfKDRzq6TrP38jdPu8JEZ6vthqniwB85hb"
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
