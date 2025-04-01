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
    "2SLggMFHPTeJYHrVbrwYJfyAxHHfGx75nq7aQWv11yZpjk12de5mKW6FdQE93r3UE7z1XDMhN16A8g2NH5Q4w6qF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37rixK8sJ86ZUqPDUep1LVRXQmXPmfxHRb3CSVMG76RDzyGJy45U62xU8muVxCA7bdzsFz489cnByh3ZufHvzWoJ",
  "key1": "3C1rDms5Nk2X8w5mQqjejKyZt8EkEgpWmqfq7bH5Mph8DCXHcD5BMEkW9JKaAHg6usitN2WYmfWEGEwSpUTpUqVe",
  "key2": "5KgWHcdPTrUiwPajDKmnKbvp6YXbScHgo9UJFuLnSyybmBxB93xmiJJav9jT9rxPy887ZYytvhHS2DhySQZguyns",
  "key3": "2ys2j6tX5kyxL1X7PwbASAKGJsFpTxCUPDY3f7mD4EYuP6yP311yjKHFFNrTietcmQU3wFm59mBe1mXT7VoqwQst",
  "key4": "ZE4S2rSXyi2AuktajxUGPxVriumrGAfdgxzakpYcqku3FK2jX2RG6H8zprKnRJ4dbHebqG6jWCpX71yzfmm5BeD",
  "key5": "45FmtyTHe72rtrJGZ53vjTpXeiiKEsN4D3WAYWUJzPaCZaNAfyXFHLeHP3QfnrWtcF4VF5zvCm3tedEz748eZXUV",
  "key6": "3aWD6UGoruWu4aG48LPd2kFb79T4zN4Q23V3zjjy9Mt8jXTN5XGh2NwHWR61DzMphxkpqPiwPPNubixMAruMZUFi",
  "key7": "2x2b8D1yrXPjgGfQiTQj9Gsk8NtKt77Y9TnAnq8eeokqFpVZoq1PLgKsEcs1b4PjmCXhgSf2EQo2Lo7r53JfYHyJ",
  "key8": "prnxUsBtEaduULY5RcYskZhvhMLWTwR4CMyXyp18Pp53jadskiQeQNpEyjBap8nQvjNSat3jthwsNjS9AFp9k31",
  "key9": "a8EXHASRoEXgNZ5hEQgKx5qaXn3P5XeNyg1oXDUd7PCnG1xcgpKu6PcniEMSpEsjYD1nBtnBcqnYynXdHRUHi1L",
  "key10": "3gQhzc35UqHmoNZgzDobdMYDG9D3g7RwjQErUWBC6YFLbXkcrZ62dHwffxYPvntxAuVQSdu4Cm5xxKqfQysvt61z",
  "key11": "d1MmUyCVi8yYNZYP5598Ywamj9AVkBZvPuw4SwUtwHVMTLqL1BeYw6NvJEcM81z4msyE2RqRJGaqVosmfVVSb5t",
  "key12": "3pyHryCiJ74D48LRHjGxXgD6gBBoMY3fH2ckSwqxHRXqamYzCpjPLu3VrcjyjKjSwyjzPdBKE29M4GQFLAMQ6y4E",
  "key13": "5AebtpdwdF5QQZCBWvyMpNS99UP8zvnSPiXuCFGoK8SksATp98M9QvW6jYt546dBj25LfmxLaT3qpvPqLZGKjh34",
  "key14": "2AJgBytNLq1kmB6HiHiB1ykFSUrs7rSR7957eATH299t5Mw6rbVxTEKVoYAWLHtqr4fv6hrzjcf3fcoUfEtcXWR9",
  "key15": "3sKfHFjaoVLUCcqXeHdYTvGVMe6CjZ32cshgFfqbvR7Uor91CSy8Le8X9R3DgjyhBeqbSpudRmBgWQb87bSLZwhb",
  "key16": "4jKpfKdYvqLexhk279cjCGVDVHCb2pAiDLgFt4F3xpq8Jbevxc8QyshZ34FdUdwocR74f9NRWZQAUPP75J8rVyoJ",
  "key17": "4voBzKs7J975ygBAwZR6D71nmPpnGMYHkNsE5boANC9bGaEYoQyks3jTgx8ieG7koX4DyMkBaXcNXb7hHKofR3eX",
  "key18": "DNB7Bm7UEXmZLAiVNvMX6yW5K4dHRJTW21PcNudpdpNhLrPzFoj1Pd7pykFRDwYs4gThLk9upziZFsBpNePs8qM",
  "key19": "2Bt9U8B5foWbRrUQMv3N1YhnY8w6GtDdACSbyFd26CRFG2NJWyCu1mT4ciGfPWjb879VNnsioiLNDH2fg7qsYcUe",
  "key20": "3NS5zPJcBJi78X5cTuQpaASS2BHALuxC47TPjsFgbGU5kNEWtcSv2ZH6J8jmVJxgDgRcqcSM3H7nQpTAu3ycapmx",
  "key21": "2sSLYHoooTapjkgxEbAnWXw7opbQwk6tfd9aCbEQuq4USB5TYiaG4YWH2T8vqFSEDDdNp7pcmWG3miQZsjAKyRyf",
  "key22": "Dg12pGC1MRgPW4h4HU6KZpzL9tir7dpLMciqcGYzfufLDjhnTAh3q5gtF4zskEP9QAstvT53BFWj6sNXgP1xa6y",
  "key23": "3JJPAYDsosRV8pV4sJbvGQfzUMHYdGqDxYRiBdrfrD2Z1TEFiQ1WG6vUNupSseLhKuVaz4QkE5gKZtmE6CZ9JgWb",
  "key24": "H7CEsLoftZRhZjqAgbcbLCrQNDK23Ppxez9jJDb4SHwRujB5M5F1NhEoL9Cr3yJbJRAocQTdRPa8u4tQdFA52Ap",
  "key25": "5KQp1PhodvFyspgCUTv8v9y4PtScZScyD5xtnrppaaooVGmTnPS15KBgCZ5gFAHwuEMtUwdWHGA9JaoHGgBk5qCN",
  "key26": "2PbAoFDduoEg4WCgpkdRHwHXJzUWLxvBWjtE2M7zp9GtRFfcd8N5VcfRyZaUkkfb5DYMPChGYjRTyMK9hJ8JLq2E",
  "key27": "4qZQvLZLBusQie6dBLMGkfd6GWPzbYSBXeAC5GJZs2P4k5s8EK9cfDkgRxeEWK2JdwkYisFkA3FsoiLi35eatWbX",
  "key28": "5rmdY6UpK4NH3Y4n6CUo5XAz8qon3vpX8ML66EWKXWacEEnpHtRX6UmiFUuL8ZVZibxHwxSanscVJkh1d1ENuzyB",
  "key29": "4cghJrfoPaL4PGZLA9qviz1dg2FbuQrXEYXrzafrXoviPxfC78ZDdexwGjU8pm8XU7p2q4shq4rTcqFByq2Wteur"
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
