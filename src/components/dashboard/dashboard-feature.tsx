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
    "sBhq8YGtNGKviH45iwCr4yJpZMcem589DAsjqsXeeXc5kr2Hyv8UZPh9oYpFjndAXsxZE27Ci4gs5seMPP8TYQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnEQNYjqTKQRkB2yNMJ1FjB3yFoKYmNVGT27Pzs7JBnJBN15CXdMRoVonEP372sFPn3WzjR6yJeJvP1nSjNjLzu",
  "key1": "4PsBugeMvizhrLv8qvZsmfnh5wqdJUGmSNSq2dqK9hpXqC4yD2vTbcs7jtRkYRVqueaiG9SiUu2fmjSV6vrtbpXJ",
  "key2": "LaXRsFs3xBi4sirpynJgaE2QToDzYeTB9h3ejZNeu1fBRJycWRr3xG7He3psrE8BGaANG2vRsuZBW7L8i22N6zs",
  "key3": "iev2zX7jZzz7r8Ry7VcdikZYscQApMaZDveuhaf3Mpqy89dDSgSsF1DtgU4mVQn4uXApnef2G25U7Sxe5XNeqWh",
  "key4": "2bHndvEjWkU1SD8Vu4fDsxmHEucKP5ja1YRn3zuz7TZWgxG6sLDPQkCwot2QqRtn157fr2Ey2EA8cFipARLamBs1",
  "key5": "wunfYLyyxbxhHy7NjNnvhK55FrwvrTvTpgNkNyxe3jzBcXY1dkbCtKaXs2HPKA4ufx2q7LQHU9cZrLo1pRsTiNk",
  "key6": "5fkpWASYviFW4RdQH2yo7ffzobnqLyWoCYVUiaYQqYrqMNQGnuxC9cRNe4o9vTq4rV19LXvL5DJENxMKyRKf2nEx",
  "key7": "5No5tHEKbVNy323iGraLzx85KUuosFCyoSTWoTh4JEutWHEFiECYj6aTKabAiVrboj3Zz2UiniPUxcPj9e7xd81m",
  "key8": "3Y3TzboDDmGBZzHGUjYnZsKMDAkuXZZT1CbXsjJ69JCmZ8hsNADg8HSaCVbH4iEMf9umcsetoin8vF3VwFuHiMn7",
  "key9": "4YLJpEwrSBfYmZmFpvK6Zz1GJTu9FGzW9wGaUpVf9dNLGoUmEjX2Yzma1iN8zv1Y7e52hTw21m34BcjPMCn4t2w4",
  "key10": "rGXtrHsMnBjuyub9qNXTCvXWzigY4eSb7VQsA87xREqHpsPoaUghQmkkgfHS8oRSVy9PiHLEe9KLa8n1ifuoZaj",
  "key11": "45kRjzVjhdKyDA3uCz3GbPuYwJWeAThXf3fNqC41Lf362LEqSGUEQhkLoSTs9rzCEXofTRKUGnj4tgB9MV4nSNpZ",
  "key12": "F6b2Ucsb3uopGEkChpHtHdMbFa5ET3YYsDJGYt4mJqS1baMfXR9CrYyNWLy4Pgt4ajcd2R1F2pvQ16HiB2uQfsX",
  "key13": "5YgCfkHb2f4ndvup4eFf13DCWSjo2AS4tRpbnviErKCvGKD2yqPQfkcW7VHQUV5J24jNQanGXjHve8ixBhFwy4Cm",
  "key14": "5ZtNhJEw7jxFU3MAAsev6KUf2vET4DNNcYbT9hVz3nJ4kpgWW3d8cowjjyPSAdvQuoeDhjLBLBReATafoc9g9XiX",
  "key15": "2QiBhfGLWCrdC8rWeWZ8ZL6osgLiehHgJ9JVBe59t8iV87p22PbzjGh8AzKD4e3upEGkTnRwxyDyn6koK2ZW7wMg",
  "key16": "rWtzkTCju438JAirvKG8HWmx3NEdKSdaWGrDbGc12S98NreLduh3DZQbyr4hzDoXpwwq9W1EfCsDtF7ut6vSuw9",
  "key17": "5oU69tRMNGsPpnrB7G7s8qhcEcSJA5ucEtaVqteTZfdx9UyZUcKaiNC6SY39A3SecMoP7JDWeAy3b3ab5HKRbVbx",
  "key18": "3Akj3eLwZJQToC5LCPyL5wGNzFcNZ5nsdHP5To2nYqLPkoNeNTT4un7iZBDaDyf674o4f2KqnTQLGMN1GzpNQEP4",
  "key19": "5ycY1LXH72Sj6YXX41mSyG4cF3asuDH6wdds3ux2NE6jTPG9TBhoWgio8mR3srZ2n5i5kU73rvAWzrFKqBPrJNAv",
  "key20": "KdZjisSMKoWGV6fsYyPBABo5NZK2dGHFWkt2FqTWpLg5aV2Jby8WtAP4rzFw4JpwJsKGPjonL2KwNXB6vj9dfdN",
  "key21": "EanbTtWmSoU95F5QtAZncLZA3eBz9FWqoZj3sDHFEchc9fuir5QPFNitrpyAa4j513T473egipJBsQDZsNZCLE2",
  "key22": "vCQiQUBxWo57GiBFpUq8NGXDxL8FQ4fdSQWv8ejWu7NqJYhLfMgBtvWjsY6LXLr4fxZWwpxPiGaq5LYRBHvMYZT",
  "key23": "3trskm9ugZCq8UqVvRvYQiQH5ykNnR4Er9wJiHANH7uDMxKUhBcC2dP74e2GWUw2MfXoCsF9vfQpX5zh4jFAcg7E",
  "key24": "4PNc6rCit3R2YdK3BVETmyXdgKcZWksWaj9iwJZKMddLeZkhtZtGrQGMRgx59zBo1H5gAJXWqnZDhXDPqaVvrMQi",
  "key25": "2XKidm5mcf8oAr7wRcY8zBTJ2b8vWKsW44YQTNi8vk5E2mos3ysF4csFcfZzTRqx5ASwGV4mJsx56EDizxStp2iA",
  "key26": "e2AtmjUp2ySHJqRBoeCLCgeX9pSB5rSRqMMDEsvQfc1UZETCvetgFVCSuG2zvMu456NJ7eJrmAH9gLC4fhzJtVq",
  "key27": "wkuAc1zK2ywkN1sqGsdDJjhT3uAgiNrmmEcL5qd88G9APphS2PcedQY2mJiJv4gPEyB5FtvsHBXCyJKPXXVyyMP",
  "key28": "4JPqxh5eJs7RRoYSyK1uFu6YAzrRSC7r984y7fnJo8upiyM4njpSKZn9rJNy3hHREaTPmSpucd6VVh3TrWcaw8yi",
  "key29": "4JMFHjgoeesYYN5VZG4FMCYaxAncFdGg5naQCoLFUWdvBGLS8Edyd2kT33ixtqg1pg7LEq7Y6PJWPSBuC11TgrRZ",
  "key30": "4nKUuD8e5Y6mrN9iJg2KMY1N8qRWfae95cB9iUnQj72nQsqkGhjH7nkKyUVnjwgDGaHhwFm36tdF1TQqbTsHcndr",
  "key31": "5LEcndDtYfvptu7HENGV6Cao1VmUHkGg87cBwY7WFTDjUiXtxExWeqf2TAk3Rk7b3fvjyfe7GPDnyeFcUXYvMUfG",
  "key32": "4kjEQQWdkAjV6p9eaHmdxvhbknH7CWf9Smr6udUWXuKtUWUe6SDmhRGpv63PefTiHKuhnWpwTGxUZBX2e82UBBPy",
  "key33": "5hzLKmpfWJ5qy5hM4Fi6UW96amBPgvtBo8PWF9P1c4ciBNz4ZBzT66Ay46534z6caUB7941a8DsAkj8ML4wLkzGA",
  "key34": "5UdgQJ11eVvnfs8byNAn6ibjg4mFk1G4dMLAH6kFg1r2eN4aGtDdNXFRwiNyoUbmSTStc51CcocFJNzjCHRZhQ5J",
  "key35": "5g8gxVVv5QqPSFkr12wQGpRBUVMYmA4t9PpBtNxEv1HthsN7gLTFNBT1KKmc9ZThSDCjLTMsY87sx8aSQLLY47SN",
  "key36": "4TSXaqE6XpUVsEXMRRm1Q3MnmPVt91trQmgPiYAh7HbFJMAD1S2LTu4xV6hkk16QfkgFHaqXo6Cp3HLUdPzrEwcS",
  "key37": "5sNTBDJh7y4WAKBUGq9DtewwuTqWVPvQEkwanriCTsbmHYGFMWPSQAzvEYh2tXwDBAbuqKqtcU1ivB3rwo1bKcMH",
  "key38": "643zVUUMgDEbj46Q4pTCeWjgiwhTncqYim6XxbmZtEno7CdqnbnzjEHJu7Sog5ge1j3mJ1FgR5KvJrG5PPB4QcBM",
  "key39": "5F5graftyjNjiB2scGABxcfuPBgtu4uj5jUpixZncZ7P27KyykEEmNc98zyNYKS72R13Bg3fotiwy3T2ZWgMHFd5",
  "key40": "2CEiqixC9rHNkLmNAi5UNgXmjCAEqSbRobM7iX3hUmsp3dFGymnR1GrTECp2gX6k3V5J59VQZek1TAJgdrwHaUwY",
  "key41": "3CoghKgQdAFbS8QmyUo9A4oQYpgjJW9YFhzYPp4X9xbNtBejC6HdS8zLm8evtvxjhUUHkGWfS6AWS2tK3xTHVSiS",
  "key42": "4kWJqGycFKqetCwZdQ9ERPVbQcpmeFQoKBLziYabH1R6oo2heREbssixu13VqGqWEaRhKeEg7zDHstNvNaw2CWqm",
  "key43": "otnPsBJYGYTBM6dYajE8ww92BZoQMkPtqEa1Q8MpDSa468ncmWtqxpUiSvZKNoDrpVqPK4iaTzaja4rq1u4zDRf",
  "key44": "4nZeZevstC4A4jbDSSpv734yb75N875Zo6z9RGBHSpQPYWbosHJcWk9eA6jkHSXhP7LVVjr7zRXJzfhFLkdvsRWM"
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
