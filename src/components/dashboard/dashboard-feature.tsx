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
    "5NAuJvNtaWrMsKZmPcAEW9CNtUkzYMyrNjdPu3sybrMzD3riT6YeVWNyrSgW34zqLkdN3LjmKLtXJANv5s7Yi9QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FTjyru9ruBTdDKbwbkFEuMmXtb9Qt63zQso49aWyukoaq7kCTPUf1E3woC88qxbPtvhH8PtjSqUUXQoWDZNGwX2",
  "key1": "5jpP2Rirbi3xNcHCbjfgpm2fPBo6AFgukP4kGpbhpcMosJSgYCG8akZD66zPp2mz8QqqQQss5oQym5AtpHk2zFTp",
  "key2": "57G7PnGXYn1tJivVF8XyL6tKgwQp4YuK3bSvCssp9xLZmnkGQwg5tbfjrK78FSHKoPfDNahTXi7Wn1gAh1qGWVXq",
  "key3": "2Hx5TVvJZU3x898WGTF4F4zDNzrXB9Gueqo5FEzxUR9nCPaEEy6SBFv34EhxtatTgC8mG4XMNtcaBRAVDSedFQ2R",
  "key4": "dCBfJfdiiLNJSW35kKjWzUc9rYTNzT8XAQhVRXqru3GxXHN7ULjLqe3o3BqwJXwwrH5Fa3GBiNcPb99BQQNSF7J",
  "key5": "3XnFwEw7QEsfqfQmVQBqPELt5u3qg8XErCRCuah2frQ4uFRXKAKiP8WNBFDoZRpitL2yGUi8eT4FaJyDcNWCnhtF",
  "key6": "5R1ZxgSFANRfiTaTCYwZWYp3FneLnBorFQxJNzpBB5jiZqkEKp1PGJVVJNpvcdDPvWZQwcxZewt4wo3vzbH7tVmW",
  "key7": "PXecyQEMrNH3G2D1fdwd2a555eEeSTzmZoE7iTNZF42o2RZYKx1eZGSKG6Dkv6tGjs6dZFJtia6RPzrKV81ZQ5o",
  "key8": "2knFEmpg6vDWkCjSN6eF5qy8NMPfHXRrGP8UN4YGzqqog5g6XqaZmRLAZfXMQ3mARHdGp2QA5jX95Qyn9tncpyjh",
  "key9": "2n7VDAMPsnQoBjNWP3ZN1Em5GqWmbDSo5GvuXXE8MJrjagFb4giQmbn1qkND3Wx4FYUPfG9uNXt7mCCWBzxA3Hv1",
  "key10": "45zbHgZ9tfJvQedLGCGgBdc6EytcfbmzDejAmaYmp3sXdbwTwRk7XczZS9o4m8mU2FHjbCgpokjQwMcGHFDwRrrV",
  "key11": "3faksEaX6fiN9TK2PAeYKRNo1ekLYYRA477Yu1Fja6ywMbEm9BrcRX3DWW6CV2SpqAAEMAjzNcNQ2UdKtoQUuvAt",
  "key12": "oqQnhnB42uD8cZn5L2bBTuwF5tLjgJCd6EapMZpwKLJM75cHgribSHiQeTfkqXkVpgdU9gLmw2Wbfj9m5otfFzm",
  "key13": "aG2zfn9N7H3JBPs15xThzuKDB5kWem1xrS5o2zRqNyayG2hQvaxvpHYKaoV5UjJjQyNEwQ2okakQrDRSbm4BrZF",
  "key14": "2i6DF2c5Rz9uSeQTp6SF1GSvVLYqoKPS5tL7EJiJuFbrkwYX15ZwPhugSK1tKGkHqHCz8fQWBzK4Nf6Ppnx6qq1S",
  "key15": "5jpcgCboBt7BrvoaAEhUkZpkByWb1E1G4KAHnMuWuEnhkeQwD2TXTAkvcLj1CJkT7wfFcaXRhB2JSGBNG4wpVLq9",
  "key16": "5SUL4HwVef8z7qPNtMbXbD2vi85QhTD5H6sDutjjEqcb3QbVFUzPqyvzbNd56xAdyxWxry7L2w7NRTTWQd4buyXV",
  "key17": "35XdhhJKku83ZAo4mw1dZUUHuVwAktrfwm1S28BW6D6it2RLorU4E5FWrC6Wu7YxWjjKm2xqdx1ALm99PZtjn1cz",
  "key18": "5ESy1hozntAeoXPhh6tZM6rAhcAPXWVnch6i5P93Wivd2NLaWmJF2MZgzYgd3WvArDUWJPEmzGgGgAzmSf1DTPbv",
  "key19": "ruHDauzZ4veviP95rNGv3sKTHt4JZ87ehXcEg5c1skhd4vynExQL9vkHHcsP6yLQCJ8QKbmm1XV1PQi9D179HxH",
  "key20": "41CRKLHouJQqs5SgsLyR8xcb96536pYaKLDjDXzAS7pknHoTEfnuydbDGtpPJAAGsNuHzM56SDPtJ2k2x3eVRUkG",
  "key21": "2dk7dM1PzsWhHBz4JeNLDRbsAg98eVwdDDJR5HqLjpJ5T6zzvL6PoAFnmmwWiiy6LpsPJvjo4jZaqiG7yrdX5Wgv",
  "key22": "674s5kv7R1idAYbh2pf8k1uC6psaLNDipJVSUxSnhgKrtw9wgw2MURo67h2sSWrzgwPiBkroAYsPgRFkSKEPJQc9",
  "key23": "7cMWfRTkzXn3zHBkrPwSnzoX1RyeKvSpPnMk1SUKv1x6xeW9QuQdkqu1EYCFUpYh2t8tBM5ToMyoVXhcruuuMhL",
  "key24": "4JGxKuHiZnKPix4snJv8a1ykUrL4M4hGnxMCtM4efgv3ZCuu9P1Ax6rNnTPi43rJTGV2Wn5QV4QAEXa7HoMpDbpv",
  "key25": "DtRcCzbR5Ak651XoBEDeYYjdPUUdgaYDiiC5Bjmr9B7KL5n5CkLBiecwy2MdBbed159jfXKpHDo7SjywCnE3Y3V",
  "key26": "yT9T4EFRS7t879k42zHgjWWKGNRALzRQrK8JW3dQsASFwP7pkZYsaV4N5aWyfETNMRDMF6qr11WhcqtLfEHr99e",
  "key27": "4s1GupSXP6Tt9MUfU7vHRMzzQZ8jvFnBTMisF34TZWN7SgYNg73yPvvktGdVwwEc9prGvURTKdr36YNDrMCAcM9A",
  "key28": "2kfSxRRWT66qEqmaYoPMmHtgvv1rKGAKM96xThhYLKPnT2gzBNuw1qjLtyGDwW7SmM2KU6Ao3h72LeCAXQNodTqu",
  "key29": "64XZoL3KfkzhTZybb6E7pKc9UJQyWDu5a3BvLgQg9hddtk8m86yWH5Bso1r7A3xosUxjh3ZN6Zm1m5mz1bbo8E7P",
  "key30": "31q8pT4g5yEsC53DqWkSzeKaFrmCS8QetJFZ9f4aF67yczgcKUPhTEhBMb27r8dHbMTJ9m8sZj5K8zyTF5LSg6XS",
  "key31": "5sCgWaeBfurRHtubt5Cx7Tiq5ebZRrTqphVmXpyp17AmpQ1NkiJ2EuLL4TYoKtrLTUXTpyXdcCN6aBuAtqRWRJLX",
  "key32": "HCcnFVK3R5W5BAxXC8p1YjNp5g9SyY8gpU2N8Hk6oudGKivKKjF4mNq42Ds9tG3THrewFNDYqQCNoAXdeBdteVK",
  "key33": "3xKe76xxVKd66tMTemdk19cGmXUE8xRSdshKZ1rSXu1ggzwsxFZ8HwjCL5csnetbkaTRCSMXu6UiacPShMBfBzD6",
  "key34": "3xvVPBrreARjo3bg5NtPn4cjxun1HVP2oG6ERbaj2auNVPiyu9FiF9LJeDNFUk7huB9yC8pCMgckdELaiMsz961z",
  "key35": "KwNNss9MUy2CE78icE5nYQhjNA6zU8H9NU4QGb4P81Ze5ANURmtM3KDjFQqj6pCUdepSAFsMgFVfRgevRebr8Qj"
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
