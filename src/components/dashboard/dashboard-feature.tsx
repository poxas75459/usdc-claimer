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
    "7iPK9z5aHEoNoTdC9JHcYJZyA87Qjasts7AcNqCPNV71yAJ5vXsbxzPXP8YGTHo1GTxhd1Ebgojt7V46HpmwVv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MAsLAcQM4kXpUvhstAvHsW6qpmm3kYgjeoM6afiVb15iEeKY5HU33S37i6JpQXSe4C34AWcSnToQSPu4fyWR5RL",
  "key1": "2AsCa1bup6Kec2QpaAGRBR6LteKfWaBxpKbG7JFPVz8E5NB82Q1bKqTg5ZyccxcRazRCfzEBa8nwMUwsDFh4MsKX",
  "key2": "2niAQyiXbSaBP72RNdfDQf7HUbnF6TwTaiucKTBdqZyU6Fu7F4kioJkbhipeV1zYueiEDpCtjuQwoJ5ugcBUM3aV",
  "key3": "3Pm7QSXcADSFwjzUata3GyWxyRK4pkidPnVYFXUgfQBEAD9BSn53VQXKXJJGcAnmH44R3jxP45CzmDGghGCFD4VL",
  "key4": "ifajpomYvJq21ATJW6Gy2gXkvqHgmCxeJHHWakQvNnHrCSvC4drD1vtNshxrPWNAXjaS7XEGDyANkrDE67MSJC4",
  "key5": "32cHxgBaPCnmAoyP7DGxQZxvLm9MsVTZmjrZfuTFbcSucoAsP8cHS7HtfyfUnsRrMeauX99nLTEFMFDE5GHPQWFM",
  "key6": "3DHpEBxCoXABWJ7BYMhenYpAbuXpotnn5RtTfUqso5Abgq3mRTh4Vm59eCpLsuKR6mN5r1iYiJTdZ6CZkWNS3Ush",
  "key7": "2vUn72XNVJSq85A9LxP5WVyzAo4LCyKdqvnsTceCKYrWC2jcsatuPw7QRwQVqBF82iJF28Kv2XfNRGVMc9Kwgiqv",
  "key8": "5LpVmKdoCh8GN7MWJ8Rd27C8VySCXBgrfJw88MEuD93duxisR3rBx8EAoB7PyuGqTsTN75Y5WGGA3d4qZhBtBRWk",
  "key9": "3zFFqK8qN8RoQdNqynBX5MDSBEhSKbF3QcgSMwWKzSgh6khAY29ckZksHTaetPfczuCwWnUd79bMBoy9XjbqjTSh",
  "key10": "44jvj2211mLoRHg7bhi5b6ntcNtqkJNfdeZxmQdARo1EAb2VGJufyAVXiBwTXcbMEhFYH6UrAYiNbMVitJCSAyPQ",
  "key11": "4fcmLFiKqJ4ckjV8m3TNSio4eoFJs3WwSpm4mbbTzcUg3vGkCDqnQcYXT2sGA78hLg4HcaAifAczbg4BPubdyZTN",
  "key12": "9Td64gAFmqgHkM5U8NfoJ8MpzNGpQvkDHxDcdDDpSy2enHrocqrPyWktZPRs8NRTo5ipeUVG46yj1RffCufHZpG",
  "key13": "3sJ6esPg2wnvghzSrC2uTAo9bBx2XkQoMRi5gQckHoeW3wtRCFDip3sRKV8UNmerqJnxZfvnPAvcGfbf4G4EqQbp",
  "key14": "VjS5MefPJDDZNRSMiH1TbwMyFn3ibCAhBGVpE4ko3azgebJCsffu1YjKruNCrzFvB4uUgdBE3mr1zzZPD7pRDjB",
  "key15": "M5PyhisUJv8pMCeMD19mhAcSo5mtdqhGDREWrdNHtyVmUrPE3M5fJmWRJy3CrXjCN7JTmsbxQ6ZQj8eTRPwJFgS",
  "key16": "3S64BexmfhWyJZmAtoeF43ZmDPSuBnSrsHCNw3iKzH7N1rCZejirxkgcZbWr6YJso3WFUAsFqHZdJwvRXS7JuZ7U",
  "key17": "R3KobwvFedM582U9pZXxhbDkbu7bMNotDYFFaePVJojS2w3vgPBZjpyC8fmgic7Bov1sNmgBuj9vy5Pq8FV8M2A",
  "key18": "b63McGS4GjABUWkc9X7CkLs4QXB1Yp7unyy5scmuFVfnfLMvCHTk7QcHRdJs6ELaG6vxcatP3DGqhcuu8ufn4pd",
  "key19": "3jJpCYmTjCgR2Yryq7miRZz37QuuJqNWTFzRHZuGwGmsTf197BSgVaBdhFS2pNaCiv9a1vsoLdCDLLtg1qpZ68RU",
  "key20": "2CbnEWCXsW3o1sobYh3L1KZYon3q8y5mnHqJKHfohScbBhxF6ufeWmDuScbSmQgYUAVpPX1rYmJMwtG8iK2bfCNB",
  "key21": "66i9ZeboTL4ZucZVKFQNwPD1yL3KX9PartBCmddo4Qfg2eP8p5R4CwymKkHoMmKrt12BPZE89afXcnXdNbC7Yy1g",
  "key22": "2ReYqiukw7XiFijKTC4eacTEroeMjXTyFBJdwiHhx6KeLYy96Hrip8drozGiSGaNnXb4qF3qipmrsSBmo8HdWYPJ",
  "key23": "mTrx1TREUWaNeu4m2cdgWM8iYYt7e7cCdVqhATnaxc1eGUAnSYiwHA6f6HdV1aE1f2z1WrdDPbjwU6cwUCnuW6Z",
  "key24": "4psucqcX5A5ewGQuNzaL3zgvBQiyuQtzKwbRK1j9kKmKEqou8PLDQdzzFjZWzs7cBjY7YxLBzhGWiA2HY87CAB5i",
  "key25": "5H61o9V53qm6HQ9g6aaY7YBnvXF5FWYUt8PcohJiBBJe4XTGVjzN6TYG82RzUU6mDHENRE98AcqXV7bDmwSrEKQx",
  "key26": "4qBc8hwpWrWNiKcAZTDvjSZm6s3sf5AXLxQG6sknTKiat7SiQD9fRqNQn22N7WSrovXWLWhvHMZDxW9mSi8SdKQF",
  "key27": "2V443AeRMtApeWLgYbGS1UEhQJHRDFbDAwjKBdGBkj2jV4e2txUEbcTKGAJcRmSX3iSEJKRDdjb8aWvvsinnLiyo",
  "key28": "4MF7YZY9xaJ3GbffduiCdERWRxq6Dc5PQrjMiUUkDcjEeGLG6Fv2Gzjy66Dnne5oS9EqRXDSwd5zKd7MarR24dD",
  "key29": "ixaFL3eWz8WXKL8bvGJEqirCbChZjtBjPTcLW1WsCY7BpkG1c6SF4oRrEPtKhT1ctCkzdnmxNQxprizjMjxhZTb",
  "key30": "676AGmd3G2g9gyPXvEMkB3SVX4bhkJq3oqkWdVu9PJ4jwXSbFHBWwfPVaz8jsFLPGYNxfCrzzmGeDmnYRa63xAop",
  "key31": "64FzutAApew5nSzScSBzZusiHzdZP5uDdXrXiEfkE1LcF1BLue2ytHmV5UzKLMVcMEzZ5DSEq8emkvmj85DZqu8P",
  "key32": "5npgn8com17TteQm2pFzHaKWFgc7KPFzzhXq9JZ6wRJgSzdBYzbrVBSqgUmgcLYL381PRMKeM2Pcg6mjVoKqkt43",
  "key33": "537PPXMUyZfXdteJF419fxGQLaohF6daCTzvq58QYgsKpqH8GKXWjxLnPegDdCJCCKhJzewV6bgbtwvaAko7y25h",
  "key34": "3rXZDpUvbCQVn8HECXD6uzGxrjwD9UHtiYuTYDLdJzqVFFinC4WCoHfT1FpeiGDKEFDN3us2khVMhMJQsQY9QZNJ"
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
