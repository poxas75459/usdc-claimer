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
    "41U64wQ1KLjfVKdoCEnBPUvFcm2Xr9BMLxMmLMyTfcto1Ni3bRF7FR5LyhYbj91H1wnM4kMRJUdLcgji5eM5jMbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gQLCTHtymjBqT1q71b4Z5osex5P6JBTFS1eThd75YiY64HV8YH4cLvetzPTdE3nmx9cLrjzhrEpdrYNX33HvKRb",
  "key1": "58H1imUgjq8Ukuz5XUThMcsxbx84WvYGnthZ23yfPRMwyp7LQCXdPeTDycRrrnCcCHB4Ksjh49zYjDkcNSdTravT",
  "key2": "c1BagYQcmFf5xHxcQqV33UCg8ibXcL5jrRs8fqxCyAYntv7PReLTuV2dU2eLvJKp5GePpKRPfrTZdwG5dd6jTsN",
  "key3": "2icqBQQ6DccHm3ACeEZuvjFbBzten9odBHw2RBC2EsejVj5Z9ayhLwKgK1sNEHQXwfU5VdPWFhAobx77DCp6898n",
  "key4": "29CFwgND6CDwYRphdXELPKjfHo1mVEL43tbtQHg2FimCiv3LbZwHwT2K6aPE94KH3NLn3gd3nsX9twNADM6e6RhX",
  "key5": "ykyNabjWfPE5RTTkMHSyWVx4KvgAhTvj1P3fCFZTFDFMkDxQLLgvVmEJRuzvYf4qgJokgkYVdW38Vv4KYucPpVW",
  "key6": "5zjMrFx9JoYsZkAkJe7MZDrKEayRWEXYBGNZnuMGbmcBciKZ4UZDS7nE8GjDzQEtSysbtE6KXh2NnRFV8NT7Nhjh",
  "key7": "vhLt5sCXQHZeWpuui2TCYx7Gq5spZUPPB4gZSw5s4dM7ag8qUjkJtyvGYgeQqEV7jZE42pEPj9n3jmzJ4HPWJ9n",
  "key8": "3Tu9SXwN7GfMjt78amzK53e1tvpeKS2Ea3xJnH8e7cQwygS5KtaQmjKhnPyoStNCEBgCEZ8Xzrrwcvgi5eidvcuF",
  "key9": "282DAMUVNAKFbokadVYVZUQNue9MPRNeJj7h24LJ2XzZuyFymx9zZDqVaePfX9YAae4SiJ9oFSkDmAAoyuptiqmX",
  "key10": "4ZU2ZZEedi6Dsut4mzLET6FezfskQcTH9AEKkySF5Z2iorPikrVQZh9VeV6d2xNkHudjRYqVoJKZeuSgenBXBjja",
  "key11": "SMG9ony3Ncqt83gMD6DKx1mExu1V77S6Z5jvkfcoC3wduoSTxNdp2xcVvfEn6ZsiXP13fncGX1zWgrDjWQSZiUq",
  "key12": "53A9PrHhWPbXr3CoP9JBfmJor4dmXwHgyqAPKe7mhDbbywBBkHYairUU9ixLYcsPSLqJj1abDvFto3X74sWviNnr",
  "key13": "2tVdtkSfn3jspiuZFw3KXqZ82jaG4nWxGPf6Sc8UEZqaF71FVkTeuCbHWudxX8ppw84NocBX2U6S78HnHYmhNp5K",
  "key14": "4KrG2nYyY58MbpfRAWhAF9WTMmPA7tFaPf5WRHHUuorYXha1XEVYrnrmJM8K6SNRnPEaAnhuXkjAJyhWrEi79xtm",
  "key15": "4CTz6JzXCm7fPWU9YELSQzt9nxc4dVNd5qfYgP6zva2pDNbCSST4cH9x95ndwZij18WhntAe39Qk54LS61vK3nhY",
  "key16": "3qTPbaumTnt7rnTQJRQdLY413P1rk59E3Yc5sUNdc42Prvjt8ueC5FVCjQjgS5GuEzHte22CYUrb7oeBAUbTmQo9",
  "key17": "3jEnaUscgq7QcqUp23LtA1xgB9scgn8tFQtfa1TCReYsFH5rqPJHHzhQKZeqiDimjTZxPer9NrEcjN4cMzdDx4xR",
  "key18": "2xMrYRJJfPEFUkL9mpE1XHMpgzaB9nGfdycE35jv7AcSDaa7LamARD8R5gscN8h8PhbG7yfmoSAvHx7M23bWmaug",
  "key19": "3a6KKbrD9YVKicnvJtGT7PaY9BUa73S8GEvvAQ2TiTVRqv4vL4WQEQHsDdNh51fS2AQ9LxpyMywrDhtUxz1Zssb",
  "key20": "4ZoeJAtDPee2jsBvMZdP6DRtxhYhwUJFwqzLvpMBr775MiyzMsG5eM2EFA8q4VXgeACciBXMP5dFAA2U2vGVHy6h",
  "key21": "2AVYAf8y2dLXHXZBkPAjduRtrySdVZu7hPXSYvKxL6ya7WyVYfExKgwE63GjNCmDKVoUhPFvkrYN7PsRxPwYPwLT",
  "key22": "4NPsi97eMZpyXeueUyc8BtxYUaeiDTjwLMuLZbZz9xrxymuZtWmX4LbouZirH4ZErfesSjJ9SE5aLFCcLZiCy14S",
  "key23": "X37SEE92xK9DLuvwWk15WgvHUi23FvzAYaURSXhvm9XesUAquUZNAHr7zaC4npUT6JRksSS7gZfeRKU44bytgXf",
  "key24": "3fsH43NKuQ7pqbccvvLn2nZFLWesbisfzYPfVsDvwn7fa2Vt15kYzG4M1dCbWfzA1fdEEU4Zx1HRmHao2dSTTkuY",
  "key25": "3XCpbFzbS6WNuP7aepnMJpgKD2Z98XTEP7rpKCYMeYeyEf3iV5dAXkbDHUUxmWDF5cRKChVoyAZLeBLWnd9mw4zw",
  "key26": "5JkZs4bnZLHfuAKtnd9nSCZsYyowHt83pkrWbNFKTFkR8FJ6RBGrabkC2un4SLJarjiBBfaRLKAdhtTo8jShmsnz",
  "key27": "5FFQ3WAwU7Ptn9krgT94Ypmj1JGAtmLMrSScJMdn1wgEEmc6quC4FQE6iYdyUpERVAzqudpvzi5x8R9viP9r6qEE",
  "key28": "4RzbJryUGw6tFdAGZZh8WKo4PkA9LHQXkv8Q3x1tP1MGPCG4ZexFNRhArL6iwPF3i9gZK6baqn3nypWDhMRT6CLR",
  "key29": "3iM9CkBiEaygeVzMhmLQ7SdKjJTL9tyegZ6xw7DXDK1r4dyzf9DgriGKJTLcnaCARQp2L7M7BVxTAxKzKEYZxfzt",
  "key30": "44HzsojaPuA4VZqy2qcUwPvnE4HhRqLm5fumeCKgg1mDvJQEDb9T5H67Ty1wG6MKhWYYGZX2czt3KTA4rQbzqrF8",
  "key31": "2nhe62sQaTPwhbnrSBkd62Ua4EKgGUAmD847UERd9zEi818SjktjMMYod7w6euoLCCNRntfLNsuEQ3r4My2Pxm5o",
  "key32": "fUHbGHk77tUg7ENcepnxsGzxZKu9ijUnnFMz3ChFzaWURcdgVECJLEyL4dP8ewTSmw9KTau3NuFZ4hGnwLKg4yd",
  "key33": "jqSUhrKXkN4TAQLcz6q6zbQTNDgxkb1HQhXFkx6PKjpaArcnLAk4WiAwQ3fVZmMvKQpFuETUm8W3KUFJU2yhmTW",
  "key34": "5fi1dF61TZaasqjFeWQhxaXj8UpGHGDWuh33Fg8XEQK5nPcwgkoqtpHfo9EkbbXJEJztSYeajzUjiyrov9k4FPQh",
  "key35": "3ScJWYJZz14KH8EyWi3RNnETdv9e9NL1ZBfGWXQoNtoF6Cx1TyHbqC2wQm48EagnCaquUtgAFXS5Yeqh6kQPnTR4",
  "key36": "3fezqqeqhh6dwbhjjxFPdVjaK7DjoPcLUVy8qPsqGigfuzdv2vqh6Kp3czq4Zq8TPD2prAfY6s5fuaGVRhfbLYB9",
  "key37": "3m7dPFR3mcGWMTqMytUuWVXoAicmdAGchM8yVgSWY3TWsiBF1zWTKjN9jb31QvseFBsZ4FWu9d12oEHKecwDBHvx",
  "key38": "SjxD1XiqV4vHnZQ8fzALZvuZvaVpeNCReyEovLk6aAY7F3sV3FwaDw5B5kwKqeoZwmFKZxpn5wdCfqC7HaGS4A1",
  "key39": "5dkNqfit6XqAi7P4g1wnPGiehMzGu2wcGzXKALkTQeMGtFDnKbHGW8KURosGXk5JKvixZ8xX3G7oJDBCtrsbxunF",
  "key40": "4sB3sYz1FVNZu6aXur4YizVRkFPGs16CGZmgL7raa3y88cd4B6jeXWGHF6j75u2nZzZibUwB7pMUnmDhNb1vAP7J",
  "key41": "4oPrZ1kDhBiaGHmSf8P4Pkdvpm2tmUjjESF9x5NkJaiQ9VCp1pk8Udg3fxqLVBvNu7Rh7bF5NgrPQ3PFgHdoHX4N",
  "key42": "5weVQYFEPT2gHEnkyDqBptd6GudzMhxnZ3QFy9VbbkGNPaMbaksMXGS54MXfuc8a4RXoBVDejmwGHWUC2NFBMo4m",
  "key43": "4TCM4VVUBgxE5mcYqgKR8HsACtnh9kogLchN2JJCQpCksF8V8LyV6uyrF7F6oZrsGiS4zG8rF3mxMkomPug3NmEv",
  "key44": "duZdwL3HHcfS3qbk56brcH9JN1hkmZvwxgVP3e1BSzn4EtbGTWknRJa8SyLnGZPccyn88YhGQkusDVMUZJpxLtG",
  "key45": "4QV4g2thLvmJya64CAsXQpxdsP4hPMHeSEtMzSKPecQjQuV62ytbbwn2V6zQZgDYmhRCedJvPB24RFyZZU6q24sA",
  "key46": "FVvQyuYbrJ4WpBpgfV3QUP3673CBkop51ToQU7CAiyW2brTGosBARiYJcAjdnN1XZLpxZ5aw4eQhhbXj63WaErw",
  "key47": "svGZR9MhxCWDxyQPdzczkhDH19AV31KMXMS3poKdUjA3fu2E8tXjCcXUFPhirK1U1LzbApDb1GuM7ZNnG3zVVua",
  "key48": "aTDYEkSmDTFhEtAdXM2UjZAVcFbqRr9jPc2L6LaNQDQL8ui7nM61ew7ZFrmrqqcXmscxfjbNKoa55Lwh8KEbWM5"
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
