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
    "4Vy6UrWQoHuHKeiwEySabPcQJ8ShxtGQ4MLWoj82ByD2ZzxkYi6Xy6VNnn7nVNdL69F6H1TPMPKfb59dpQ6Q3YfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61PthEchB9Fhga541UWnu1aGHRC3osGY1k59X79ySoAqdMvi5zrudzV3Fkt4SpsvJWGXzXwzBrWAyf5MZQMdjysN",
  "key1": "5FchMC7ss7obnVKBaFiypoHPtbHFZRJcJ4pi855xPR2WMLXCi719yaozTycuMFexi93DXudWQPjLXtLEtB5PrEoD",
  "key2": "fZaMjMXEChMDZcjyBYCNnu7Dq6PHsdhMMgBxbm8dmrdUq9WAMtyvMBcxPpaE2fetw84FpHQm2uiiMEbK5Qjmt1k",
  "key3": "5bp9rPQSGbT7dYu4unpUY57bysfDNHuAPreMZmeSaoDXyWWR1PvRH9idSqzMPHh4wqDZgw9N5vty8ZvZ2G3h5t9n",
  "key4": "4dbsBEKiMfHQxP4PeAd5Cg6M9c5HJK4LAi2aUkGU2tDnJWpma1dMRWfiSW3veWyzgbcD6qAUTb3hjneUFRDXczn7",
  "key5": "3eSGPcinhKeKx6PeRWRRWQ1Wgx8j2Xax4JXsnM5fENcHNpck5PjhjELHhVFLWrPpdHzWbaGjPJEHBbYtj7bLjjxr",
  "key6": "42s27vPj5y4vQ59fWBjzisXLsoiDUGrMNFgHMBUnLqemoBUKXgae8H2xHdzMobzpFxVf9vVPxnT4cbvVTTpeRACt",
  "key7": "4cgqrnG4xW4uK1PcbVkV7n5zuWdgUcwd8fMxiV2CAcm7esqxqk1WfcrhQNJoJdzX7L1eMc1sJJDkuDALp8kgBX7p",
  "key8": "2jh14qbwjopuwNavCSuYajAtHd6MzCw3iEj4Tppw3yxAh4wAHtsgT76vdL12EV8PsSUfc5T7g4UEQ4dE53hF8SoU",
  "key9": "25fFLFEEPBVvCCAfRfJmWPF5CvHwcwv6hefCEXTooM566fgERBaaywHjnfWunBqb7SaMGXn8LMS1buRfsH3MTrWV",
  "key10": "45UK8g2NNZYbKmC4d3iahqQbEdebi9SfVsuEd4LERveC2bRDCuKP2QsCaf1YD4BXaerRmyX31iHHJbsjmhmsp8UK",
  "key11": "5V6ctXEoktEmHsnRqpHnjF2SW5uZsvpBVb4KqLgoXfW7aVKBVpuz149sqzmZnE4FZkpkgzg9PozTZtduLJBeqonP",
  "key12": "3iGtFAF9fF17yaw4xmbuQFVsjJG6okuceau68fqkeM4B94V6mLNugmN3Ni7JwSck58Cv4z2yPpjk2UL7Wb3AiPdn",
  "key13": "5YCH6UJftVK7erahDWMifgmqdqCiqcbXCSs58XHUfZj56cDoZxMrJtchbxnbLrxmtkhxc3xxtPiDNpbN7JCLJdmK",
  "key14": "2ZKutC1XaB3VFx9Dnq8KTbRXH3wB7Dp5ksr3KNcKwie3P5ASDJqjxqeBjoTGqrFoVNTZTFf6KRD5Avs3aaBEfsVC",
  "key15": "2S4zAXGScpcPc9uj68qQXqef6un7i6JyT1n4K46QaZorkxjAjG2MLq77ArFAz3hGYYJRGxmmE4hjaMCn1wxke84q",
  "key16": "3TF2RoXZNVrbYjvWCBbxb1XgQaS1eA2JCZiDPV7mK2rMPeNps8dmEjPpUhiE8BtKHRK471uF9KVCpuR9sCXFGfoN",
  "key17": "4mKSYoMHZud7sa83oYT8BKVepEBNe3XpFaSxRmJbKYModZUvHrN2jZiTZS1bZK6adLxmbffyY7cZga8RDEVmdpzr",
  "key18": "3Pdg69JU37apGs2wP8tahPJJffbmxa6MPSdkke9CyH9judRJhsHMeb2M2YGakMnoYZJcjM6Nox43UHHwQ7TJrxx",
  "key19": "5B6io4VoaQT79Du9HZzrVVFX3wG1ijLysipG7r6xfY2bbsww24kkf916EgPsg6YbfF76Ksv2asbteXUUB8RPxGHf",
  "key20": "2ezpuufK6neNmkUNBHSuUUoKnN6LZdVhrCFzSPMNxMpK3KNq9QidLHSnvU9JQxF46V3RfgW8msqSuynanjUxrQKg",
  "key21": "oXTft9m1xdnuxpHSeSwrU9BC4ztxrqZBe48JgmZ5Y9bZmBSgfHtNy4nxiiEBQt1Axd3B734cE2w8i12ukbtQetg",
  "key22": "3bFCCUs3kyUBaAUYMNk1BCze5qFzJFcYYuEX88Vwfea94iLCiLHdaPo65rQjyc4QsEwTHvdcx7QDGBJHdwZuboz",
  "key23": "3sh7DLAJdns3wZDMQiyah8CbRWEMD8faRFQeYCjW5FXkc3gc2HaUrMM6QRzrnMX34F51oHPYPTTKiRZoG6YWZLjn",
  "key24": "4oeUnPAHkUErfA6747B8hsAXe958hYSmYzZp3S2DtkqLC86YoKPDpJ4MoGfm9HZTaG284FypBftwepcKet6ExxYG"
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
