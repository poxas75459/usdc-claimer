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
    "5ipqC5oP71SWpg8CC6o7ppFjHi1Z8VPcVQW9LZLkr9TykK8Mho2uJxRCGB5HdiXNPxidCmKJck5Cc8WrnLWrREF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AKSCXFgvNkW4934Aa4jPbAbH5hJFXNQtxpsBePHwxKkg6hwquWveGEYcwemWvCJNJMQeMMqGPgmPh3aEgYvWw6M",
  "key1": "38kaNjR2H1ox2uTKXr4TPGwW6KmdWEsttsLNCevjchSWSM8EoJE1wFPoFXJTuPJYkpgNUuVKR3KgtPcani1iF5Uk",
  "key2": "59auXtKWz4Rwep2zPNYFUdiGZjdqT2n7Wo7CTCxA1VCEnmKoQHRqG65bBHxPLjbrFAq29jxHVxw7p9ruk6S1Aj5",
  "key3": "YiczzMwx1uVSSyux7V6EjdTePgcmXNDFB8ETzuR4kSwUEHmGnsFGvkpbn4zS6eHxSGZ2pwyY2GB2omKKntKTju3",
  "key4": "2b3GtsPMnNQdZ3NcZEMxHXxEgyLv2BN2y27LP1wgdoc3vRJkmXmvigV56vx68mLceJ6Zn3onrzLpFi6Z7CZN5MD9",
  "key5": "ku1L7kCXJp1tVrHp8WeV4eG2EoRLPMozgy6FJx3ivdZ5xURGjo15wpZvYUECN76uAuw5Q8d9mEvFypAVLZ3jALp",
  "key6": "5PVD9JoTiQ9EBbWqo87FfM7C46jS48sq38bRn3TPUaJaddYmYqFdWiZjMEecwqcvDfT49xVCbf59eF9YfPXtVFSn",
  "key7": "4pPNU5PFvAHR2VDB9Q1emUN2vb8VJVcy1BcZuzjrdxNkFKgb2675ADDw9d17o6jfFp73KBVkRZaJgBZdkmmxAABV",
  "key8": "5d2XTzyJgH9eXh1xisQ3NRxvFUzrvcFARvWNatvR8YnMpNt6wCeE39PpeDkwFURruJADS9FEJGUraBGhVaVd1SPo",
  "key9": "d2yfMjL216cGuhbv78UKSJt3TTWeRCGpMaAVuLSBrVufSB7zDsZbB3vu9FLNmTrWqqpnVpDWvBhnEihiuWvp1zX",
  "key10": "5G1m8tLvRYA2xwf11Jip9qZw11WkAX3PbWXdXJ68nfJd2MoiuAwYxVVU9PkVEvrvRbZhAe6LGYoiWJWNVQxq4JRd",
  "key11": "3zCYRMAeDKK4eZyJyWVbPgAq6BSsZnAe9SHxTcDeu8gNyZq1tqAa4Dxrni4Ut5NC6FofNksJmof8aY6gCd2DSkeh",
  "key12": "63aAsDSCypVrzVAzXjNFfRH1L3KqaEomBhcybs6cCsp3JKFZCmvDYbhsj2R6Dkt1oWr9JoXP7dhr2zKv6c5RV54E",
  "key13": "5BoNU6rCEiVxLDvpzC68R8uYziij5kBgLDAhLTwFi7MMMZfBzmUouQYZ9H53SJrVs8KPmQrWxVhbM646gvzxj7E1",
  "key14": "5d2gr2sE1YCbrwV7BZSW3N8bx1258KufoZZkJKBfSegLBzcoHkuWFSTLtMK8XtnkHKpjpkwjJBYkZAaEmtDAd4Ao",
  "key15": "n8j7jSrsEYCnJxsvVheDxMtuK3XchD2B4jhGd2cG4TJGqwxtiq1draQwp1rgxjWGxziRX97WPVby5LhmXJ2JqHi",
  "key16": "46EgoYLAcwVtFDTP9K7Fr3kEHDA5toedqFCQnv2Lo5Pp1Rz7eaPw259mKcuXi1kNPxm5xfEceEqdC4hbEseRvkFi",
  "key17": "4EFL17XG2cWAh3t4irK4zaDBLKQm2udEVunXBASzWvTZPpBQxxLCkJGG9czCbidJERcbsprCymiJ3e9sbsvDctBj",
  "key18": "5QPeuuxdcUbtXMHauKHtUJnGuvX1CSCPtQScNLRDwtza8LHB9xZgTtqhXrSMzaWm9tHeHv3VVZj2yE6racK9C5pu",
  "key19": "5vy96aSmKSjmPcJiCxwAGX8XmWZ1ydDiQfB1aHLAuUtGpuYHNV17FVxiBGjKS4bdh3FmVJWoRWe7MjEKJ7wQfERr",
  "key20": "ZpCNTDMaJKmWJoTdfDUj1ZEGa4raRMn34UWy179YouiEMDu3iEVhq5bYmQ7k3ANaxfP759gsmC5wQFsHFEn9PPk",
  "key21": "2YfeuMXk5JvP62RtQakcRRzUSuVbaGmqsnAzcnbcDxv6rk51C14FBEdCjfb52ixWLvseNprbi1PAHrFyCEKT8K3o",
  "key22": "SXGm2HCJiEvvFDfPKymFRq55bsJprHPna8yySgyfgXmaKwPnLUsRKC2XPjYgdTTTfatAVLSuDa8SzasC2bE5ttG",
  "key23": "5DgdSGGhdE8FDen7PeZjgaQSh6tjpBBYGXEwfYKgnRLaBiESBNPX44dDa2d45EVCf323C3cXKNrWGCrN19oESMHh",
  "key24": "Etgzgf3uNX1PiE5dA68uiJqJchnEnogCxkW4KuSUn4cS3GeaQassiwUuabYzzHsaAt5brB4ik1dpVquRzJcaEuf",
  "key25": "2xG6YCbXYUEncLHEoVi3M8vAHg1jwc8TSHw6ynAszJQKMJoApnzyVgSUNis4h1UavGF4DUiT1r6TBTHo4hN59TSm",
  "key26": "25y2oE1NV4fmY1zwDLdxAdu3xDutcbSLB3fuk1ufeAMVRRGMFsUEtYqcZfxJwg6eE7Tep7NkWyxioGi4JMfxsXJw",
  "key27": "dSAYQPFhRs9c7HNB2ZaajSNSPjyZMggkRXoYWwNaoWP9qeXUPZcNS4iVqf8XzogCd88fJfH1na2ppvjxTUBKnXG",
  "key28": "66ycn71YWpqFspNAu38AKw8dBRMd7e2ZFWVN1pt5dB2WtQywvWtufRGL4LisZsGDQitYiLqyaz9b22KxtMKTDs9N",
  "key29": "4UtjhdnBjGVkxUD5h9dVXCaxhjKZ4RJAtTDHP4pfwjqPtxfQHAkSsof9n79W6rG7WsmnAbaVWxFuSAu8YaFVHNbY",
  "key30": "2BSs23iZ9JadkRkReLp1r3EhqhPdTWBXsvT7g5sSywDaKG48mSbeRcqP6RGpGDr3YismFr4kcaWR4QivkR7RwqDe",
  "key31": "5Nc9r6Y2Q29w19hxHN99emQY9JQFDM61ZyE5z8Y2tafcfT19T2WhPVhXLH1cT9ZTD2eJqhgTV9YTCMwYwGE4Bk8E",
  "key32": "43haEHHGiNpNwa8uRrzvAb7drwEToZCc9wDoRCScjR6KeoeVViwiq4oPkkQ6GkBXxfkKa2Ao1yAbqAS8AQB4uhSm",
  "key33": "4T21jMgyEVj5cxxDiR86pSiwgnu4ybsbv2N2u6dpnmvUVizuFVoMhV1rDfcobJo4ZCnT8Z6J8EcYTQzdUaG1q2Mr",
  "key34": "3pFMaYM6zAX7h8ndANA3DEX1rzh1Bknn3gubfGQPrW7SXJgFXSMVWz95DQ6PdqnJGBYqggeNHBTGRZ383B7uU2pe",
  "key35": "2gjDrSk8CaJnJheeuAGeNwqYJ5tRpWTUK2v837ksckWvqsUfEHxzsBnfyHVbMPsCGwVE4UszNgnrzvom7uj1YDih",
  "key36": "7mrpLn15gAArr4ps2dGvb8Nt1HtF7ER1JURq3NHhfU49CsybFd2ZFzJhMmr3wd9iubvZu5roNxWwTQdpVTEW2NV",
  "key37": "4yexyUUM854NWAgyDSRRBR1AnsH4uXWbAh43GrbzeWR2CLKNxD236x6M8hKho8aNDP6AGGLs1WvwGqzELEGWJXbE",
  "key38": "61ZVDrAausyPW63boYARiAgnM35EdFyaqWWtQZ2UqejyCSca9LnvGuAzFKUB52YpjtANMZ3e6aG1k4b81yfoD25C",
  "key39": "DBbnfoCNPTdaBdQHbD8iiJ4SqhLdxL6u2mMhyeTmL9uRM5dVEWcmhbGb2GfhQeB6SsS5f1Hd84M5bfcueGarVj2",
  "key40": "F18T928w9b8LjYCAVVjS48MtEUzLj4K4qVWhLjDu1jk7zv7kRpc64Q2XtJR5tmSKnL4GCLJ9kyeSCFqNXNiXXF4",
  "key41": "2BoW9gVo2qx2fNrKV1wwBnmSJekJDPWtrv6y9Upy2rZDPyZHGCH9NxXtfNdk2XKpWCYseLCTZgp5k2MWsvgkTReQ",
  "key42": "61vsLg9NmhEqb5hnF5MwLPxANHhmWomqFi2wU8bSqBecPncGC5ja4ihBpkTSy52JPRTFp8Wpwi8epS8dcAYBrfuk",
  "key43": "2C1LbsTqqJ5i7gbj8WSuEELHjfrudG4dy1qGVjc5wHFJBqyq3RVo6PnuKV6x5LuEPABbZtkx3DrE4byv5QUGLvvu",
  "key44": "4ciJEkFxwznK58nEoPHc8QhT9eCt9cPV3H56E2Wo7UghvN6EevVutsZg7zrKsJPUa7DJiGLmVMwDVBxLiDtbAu5y",
  "key45": "5RLXNKovgRjNc2NSPmoiPZqFzsX6vLfijfv6cG3eBwrKR3kisGFqzDxc6KK5PGZTUtfn5zpYev5d7oMijjn2t8yQ",
  "key46": "4fvRNCQN6FALePUuGF6P6X3MJieh3aACNQfxjvGC6Zy6wkMu199AEQAQP1e3Zy3Mee4YFCSNPykjRivLEqDRg4Sx",
  "key47": "2E71sXrfofYwLHqN8Kmc4SidGsLAQ2eDCzBepZzhzRmdA9kgC1zSzAhbwQh4ygp2KASum4gDDvT1Rg1YK8yqW7PT"
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
