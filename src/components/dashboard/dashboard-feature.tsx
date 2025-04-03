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
    "2pL38uYay9Zgg11gJM1g5Xc2UMRbxcpHS3ZzBUgcWTXRUE13Bkh7Qu6t94PwgrxgoMftxcy7Y6Pq8EUGqnEePo2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LxRXWgoCJmPh18JH3omWcdkMHhv7tQsdEpvBS2DhUH8Ue6kCguFgNowr1rn2Z8W3JcC4Gj5toNBHkiBiQosvkE",
  "key1": "PACJ3SHGYP5e5WtdtojtaGCTULvtduSJhh692i8LHGnPPJZ8LDp6yxjXMnNkb6curzmrZ96ZyrtpqryVzkrfav9",
  "key2": "3vrck2NSZESC8tpU9GGX7jFJyLmPzK1XnG3Q1WZKiaZUMGS6Su3M6j7Z814iUiGock4CGLDq9jwDAKeMTzDcUJHT",
  "key3": "2TdbhDTFseUUGb644KwNBQg2jDSvnc7wqoKD88btUniq5YxCKXh1noKfUqaAL5icMbni7ibMa6uTcgYYLAP9P3Pa",
  "key4": "2kxRVYC6nhxBhLDGXNyKzf2Wy4Ch7zcyteuPGQ94hEye9chcMmddjohe997DRZsKaV89pEPnhqueChtg3z3T7jq9",
  "key5": "2zpJLwgcdeChXiEke8U1tUPNxe21Anqs1QHK64xByPjLGYnAnc7cBsaUKQ39usvheLNo6SAixDgoBAGTVHNk2qq8",
  "key6": "5SpEgSXNMjnEJoy3CbSEMUgcMraRT3gtyG7nfdHJQuqopafEokTgBKmAM9gUv2Jk3zq8wcQZFRzPtAbvLVUPDCY",
  "key7": "4EgTijAy9B5KV8kWLhB9YgFmwJEnWxTtcPMSyxoyqCHsSiaXJJ9NK4sWPTHFJJDPfpKtXUt5DD4PsAgdYRqGGE7x",
  "key8": "cX6ERygmkGzBLj8CEvGY7V5UU3JAfBgQ9KrNbB9GT9g9ZmZmgZQzdiXVztGmWn1L19x4Cm7HBX69FAgvLTPV5W7",
  "key9": "3p9CPs9vbBTsKNHTPX1BruEhCTXj7JQ9H8o96Kaw5QJgqVbQJvH1gdcXr22jKcCYoovoqNYP6oouyV7bk2BX4Jm5",
  "key10": "4jXKZrpkZfB4N7B5mksdejn53KaWkkeSRPFh2NPq4gHbF1mMNUF3fCcSNBVWZ8UbFVpiXW2knuW8tE4Ne39SKSdo",
  "key11": "2mHjnbNHZR2kVKHUvKHLq4DnkTJ5JbZs54E632rvsmAVmL3HXndk2KGhyggS28v6dnDSKWxT79xU1NNBzaFw9KDL",
  "key12": "rzH6SyEoNcYNdW6YU8Jr3uraiLy22oyqdKrX4eaTXMW2UWBMaed61qN6mKgxYcgC8129gzFZ7JhTa8d54KMWp8M",
  "key13": "2dQht9p8f1ctadzGah7FJFrwYpUZcHCx15gvK26sASh8x1vK8Xymj7BAkkfEfsRPDDGRbyMHvvgTBSX22QGm4G81",
  "key14": "gKcnNimKePkTfqaDVdTVkukYadiZnUtjEic6UJJKfQDkPvxxuapDa56T7vEmnwCnTRTah227S3BzXwzY8C4tgKy",
  "key15": "6Nn8WSjDJs2ntaFFvC3AcVnxyx1nxHtUuwGnLA2mhrSHRFTBBHCH9MJS51ZMRVpfrp5NyBnyHS42UEjaR5Aa4F4",
  "key16": "3w5r95BuAjMX3se5J2nCvd3aXi46ikNL2Fsjf4qaJttnrNjEgURQ9MfZQPU9FNUUzszizR8M5fyrZzDkHzTVhNeh",
  "key17": "53VkWzJ4va1CdLwUscJXS5JzHVsScfYuskEDCLD6EE4nPbNHoC5LjTv86nXom4Pw2qxa9sUAtGQfXmcKmsq4kbqa",
  "key18": "4HcxymYk7SWKWDp6uNeJwb9qzbMRWfmZuTFFBmwutKdjVmTJtnerBN1iNR7wEEfyqtzc2R4k3jxGTcvFV78GJ6Yr",
  "key19": "4MVdYLVhZLuiE6e8vPECNiBzT1kJ2zraL38TGjrQXHh36JpFzYafxfKXpw3CaxYmhwHtgHG3W9HKeoYuZ1U3Vzap",
  "key20": "TQBj4teLDKpKVjASHxX69oifCjGbFKxrMJNKkwGVH9dubE6yJwMUtjeg7qMR7jTAwhVafwzi3GTfrPNFc3mXGdQ",
  "key21": "3KkMEfJLxWCCkpV54s5Egpv2G4jDgTKhMbtdsy95j6bjytpNqjUcer2dD2EisWg9QfG2qYkesy2d8wXV7wffDh5x",
  "key22": "5NSQccdEFEHqAjcd6pfXNaegbztCw9atRZDpDyoJJNHADPPGziJMEZh5b8aTM2GJoMr32KJrKLP6X5HMsMSNUZDQ",
  "key23": "XF7byYxFAqMrxA6ewdQ3Er15eTxeoDvxC5tCXb2EAw6scPjqkAd92CtoJwm8ucPym87jLwbPH3LN9bF1n2kQCPp",
  "key24": "3uqLcaaARwpR7Un9JEgPkJBgqqTrWHJu3DvyPtXeg16GK2RmCF3MHf8hGVqWQyrxMCcPqSHha5KyzJgRMeRixWWt",
  "key25": "gQSBzM52cPHengJ2adLKka6iScNTuAVHsMYhhqH7UuEuUJdBXSwvUtXWRzDGF5j4JceSE1hDqobCUiQMd1jZMTC",
  "key26": "2sS6M1rPo7dvmHnFPHbjE5ECUpWxTkDGnWbiPNWYLcpcApGBr9Ug3ryxFuL4urjd2KHkTFspGuCWPuByq9U4wSak",
  "key27": "2pnyyMc3BiVt4wb5LoUCXp8BCsCN1cupvuzRXnWtUFBocd6GY19LukKuPVVMdWQoaERmQB462aADCCkFasfVkKyj",
  "key28": "2MKLbantK2dtuMQXocumXHhNQKV3Bjb3zX267x863647asKBAefU5Mb8iz8JyHisRp2XEoJdU79Xij1TAGwcZYaL",
  "key29": "2bJE9gmny94EtSXA9EQ1dm1sBAfzps1PWwZZz3p96pFjrYKiNRxXcwTCZmgD4bhhcNXDjwJaVEAXKyTQNcawkKB9"
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
